import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import connectDB from '@/db/connectDb';

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (account.provider === "github") {
        await connectDB();

        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          const newUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
          console.log("User created:", newUser.toObject());
        }
      }
      return true;
    },

    async session({ session }) {
      const dbUser = await User.findOne({ email: session.user.email });
      session.user.name = dbUser?.username || session.user.name;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET, 
});

export { handler as GET, handler as POST };
