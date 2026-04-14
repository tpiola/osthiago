/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
        swcMinify: true,
        images: {
    domains: ['www.thiagopiola.com.br'],
      },
        env: {
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
          NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
      },
};

module.exports = nextConfig;
