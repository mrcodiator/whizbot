/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    webpack: (config) => {
        config.output = {
            path: path.resolve(process.cwd(), 'src/app/public'),
            filename: 'chatbot.js',
        };
        return config;
    },
}

export default nextConfig;
