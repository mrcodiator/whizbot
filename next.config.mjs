/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/chatbot-component.js',
                headers: [
                    { key: 'Content-Type', value: 'application/javascript' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                ],
            },
        ]
    },
}

export default nextConfig;
