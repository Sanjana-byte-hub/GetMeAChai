/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KEY_ID: process.env.KEY_ID,
    URL: process.env.URL,
  },
};

export default nextConfig;