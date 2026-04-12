import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.1.214'],
  serverExternalPackages: ['mailgun.js', 'form-data'],
};

export default nextConfig;
