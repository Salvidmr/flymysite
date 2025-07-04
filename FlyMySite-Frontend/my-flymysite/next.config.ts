import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.modules.push(__dirname + '/src');
    return config;
  }
};

export default nextConfig;
