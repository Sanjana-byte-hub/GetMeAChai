import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';

export const authoptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
    if(account.provider=="github"){
      await connectDB()
      //check if the user already exists in the database
      const currentUser = await User.findOne({email:email})
      if(!currentUser){
        //create a new user 
        const newUser =await User.create({
          email :user.email,
          username:user.email.split("@")[0],
        })
        console.log("User created:", newUser.toObject());
      }
     
      return true
    }
  },
   async session({ session, user, token }) {
    const dbUser = await User.findOne({email:session.user.email})
    console.log(dbUser)
 session.user.name = dbUser.username
      return session
    },
}

  
})


export { authoptions as GET,authoptions as POST };