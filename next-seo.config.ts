import { DefaultSeoProps } from 'next-seo';

const SEO: DefaultSeoProps = {
    title: "Whizbot",
    description: "AI-powered chatbot for your website.",
    openGraph: {
        title: "Whizbot - AI-Powered Chatbot",
        description: "Enhance your website with Whizbot, an AI-powered chatbot designed to engage and support your visitors.",
        url: "https://whizbot.onrender.com/",
        site_name: "Whizbot",

        images: [],
        type: "website",
    },
    twitter: {
        cardType: "summary_large_image",
        site: "@codewitham"
    },

};

export default SEO;
