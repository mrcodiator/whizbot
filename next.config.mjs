/** @type {import('next').NextConfig} */

import withBundleAnalyzer from '@next/bundle-analyzer';

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ucarecdn.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**",
            },
        ],
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
};

const withAnalyzer = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});

// Export the combined config
export default withAnalyzer(nextConfig);

