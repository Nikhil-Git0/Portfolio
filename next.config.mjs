/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add server configuration for Next.js 13+
  server: {
    host: '0.0.0.0', // Allow external access
    port: 3000 // Default Next.js port
  }
};

export default nextConfig;