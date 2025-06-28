/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.create.vista.com',
          port: '',
          pathname: '/**', // allow all paths on this CDN
        },
      ],
    },
  };
  
  export default nextConfig;
  