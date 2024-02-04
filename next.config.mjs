/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'electro.madrasthemes.com',
            port: '',
            pathname: '/wp-content/**/**/**/**',
          },
        ],
      },
};

export default nextConfig;
