
export interface ISubscription {
    id: string
    userId: string
    stripeCustomerId: string
    stripeSubscriptionId: string
    plan: string
    interval: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
}