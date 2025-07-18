import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'https',
  //       hostname: 'avatars.githubusercontent.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'lh3.googleusercontent.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //     {
  //       protocol: 'https',
  //       hostname: 'cdn.discordapp.com',
  //       port: '',
  //       pathname: '/**',
  //     },
  //   ],
  // },
};

module.exports = {
  allowedDevOrigins: ['localhost', '*.localhost'],
}

export default nextConfig;
