/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'img.clerk.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.icon-icons.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'youtube.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'cdn.pixabay.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
          },
        ],
      },
};

export default nextConfig;
