import { stripe } from '@/lib/stripe';
import { NextResponse } from 'next/server';
import db from '@/db/db';
import { revalidatePath } from 'next/cache';

export async function POST(req: Request) {
    const sig = req.headers.get('stripe-signature') as string;
    const buf = await req.text();

    let event;
    try {
        event = stripe.webhooks.constructEvent(buf, sig, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        console.error('Error verifying Stripe signature', err);
        return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
    }

    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object;
            const subscription = await stripe.subscriptions.retrieve(session.subscription?.toString() as string);

            if (!session.metadata?.userId) {
                return NextResponse.json({ error: 'User ID not found in session metadata' }, { status: 400 });
            }

            if (!subscription.items?.data?.[0]) {
                throw new Error('No subscription items found');
            }

            await db.subscription.upsert({
                where: { userId: session.metadata.userId },
                update: {
                    stripeCustomerId: session.customer as string,
                    stripeSubscriptionId: subscription.id,
                    interval: subscription.items.data[0].price.recurring?.interval || "month",
                    expiresAt: new Date(subscription.current_period_end * 1000),
                },
                create: {
                    userId: session.metadata.userId,
                    stripeCustomerId: session.customer as string,
                    stripeSubscriptionId: subscription.id,
                    interval: subscription.items.data[0].price.recurring?.interval || "month",
                    expiresAt: new Date(subscription.current_period_end * 1000),
                },
            });
            break;
        }

        case 'invoice.payment_succeeded': {
            const invoice = event.data.object;
            const subscription = await stripe.subscriptions.retrieve(invoice.subscription?.toString() as string);

            await db.subscription.update({
                where: { stripeSubscriptionId: subscription.id },
                data: {
                    expiresAt: new Date(subscription.current_period_end * 1000),
                },
            });
            break;
        }

        case 'customer.subscription.updated': {
            const updatedSubscription = event.data.object;
            await db.subscription.update({
                where: { stripeSubscriptionId: updatedSubscription.id },
                data: {
                    expiresAt: new Date(updatedSubscription.current_period_end * 1000),
                    interval: updatedSubscription.items.data[0].price.recurring?.interval || "month",
                },
            });
            break;
        }

        default:
            console.warn(`Unhandled event type ${event.type}`);
    }

    revalidatePath("/")

    return NextResponse.json({ received: true });
}