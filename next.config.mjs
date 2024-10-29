/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["ucarecdn.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async headers() {
        return [
            {
                source: '/chatbot/:chatbotId',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOWALL',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Allow cross-origin access
                    },
                ],
            },
        ]
    },
    images: {
        domains: ["ucarecdn.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    }
};

export default nextConfig;
