/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/algorithm-master',
    assetPrefix: isDev ? '' : '/algorithm-master',
};

export default nextConfig;