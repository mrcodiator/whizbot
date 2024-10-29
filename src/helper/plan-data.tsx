export const planData = [
    {
        title: "Starter",
        monthPrice: 0,
        yearPrice: 0,
        description: "For small teams or solo founders who need simple AI-powered solutions.",
        features: [
            "1 domain included",
            "10 users included",
            "2GB of storage",
            "100 max customers",
            "Help center access",
            "Email support"
        ]
    },
    {
        title: "Pro",
        monthPrice: 10,
        yearPrice: 100,
        monthlyPriceId: process.env.NEXT_PUBLIC_STRIPE_MONTHLY_PRICE_ID || "",
        yearlyPriceId: process.env.NEXT_PUBLIC_STRIPE_YEARLY_PRICE_ID || "",
        description: "For growing teams that need more domains and advanced features.",
        features: [
            "3 domains included",
            "50 users included",
            "10GB of storage",
            "Unlimited customers",
            "Help center access",
            "Priority email support"
        ]
    },
]