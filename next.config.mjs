/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    async headers() {
        return [
            {
                source: '/api/chatbot-widget',
                headers: [
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    { key: 'Access-Control-Allow-Methods', value: 'GET' },
                    { key: 'Content-Type', value: 'application/javascript' },
                ],
            },
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
