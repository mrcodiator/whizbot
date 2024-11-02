/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ucarecdn.com",  // Specify the domain here instead of using "domains"
                pathname: "/**",           // Allow all paths for this domain
            },
            {
                protocol: "https",
                hostname: "**",             // Wildcard to allow all HTTPS domains if needed
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
