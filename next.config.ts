import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images:{
    domains:['assets.aceternity.com']
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/homeRedux', // Replace with your desired default page path
        permanent: true, // Or false for a temporary redirect
      },
    ];
  },
};

export default nextConfig;
