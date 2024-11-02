import { Mail, MessageSquare, BarChart2, Settings } from "lucide-react";

export const featuresData = [
    {
        icon: <MessageSquare className="h-6 w-6" />,
        title: "Real-Time Conversations",
        description: "Engage your customers with instant, AI-powered responses that improve their experience."
    },
    {
        icon: <Mail className="h-6 w-6" />,
        title: "Automated Email Responses",
        description: "Send personalized follow-up emails instantly using AI automation to keep your customers in the loop."
    },
    // {
    //     icon: <Smile className="h-6 w-6" />,
    //     title: "24/7 Availability",
    //     description: "Never miss a customer inquiry again with 24/7 chatbot availability to handle all support queries."
    // },
    {
        icon: <BarChart2 className="h-6 w-6" />,
        title: "Analytics & Insights",
        description: "Track key metrics and gather valuable insights from customer conversations to optimize your business."
    },
    {
        icon: <Settings className="h-6 w-6" />,
        title: "Customizable Workflows",
        description: "Tailor the chatbot to your business needs with fully customizable conversation flows and integrations."
    },
    // {
    //     icon: <Headphones className="h-6 w-6" />,
    //     title: "Seamless Handoff",
    //     description: "Easily transition from bot to live agents when needed, ensuring a smooth customer support experience."
    // }
];
