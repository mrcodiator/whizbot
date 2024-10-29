import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import db from '@/db/db';
import { getUser } from '@/actions/user.actions';

export async function POST() {
    try {
        const user = await getUser();

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        const customer = await db.subscription.findFirst({
            where: { userId: user.id },
        });

        if (!customer) {
            return NextResponse.json({ error: 'Subscription not found' }, { status: 404 });
        }

        // Create a billing portal session
        const session = await stripe.billingPortal.sessions.create({
            customer: customer.stripeCustomerId,
            return_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
        });



        return NextResponse.json({ url: session.url });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('Error creating portal session:', error);

        if (error.type === 'StripeInvalidRequestError') {
            return NextResponse.json({
                error: 'Unable to create portal session. Please ensure the Stripe customer portal is configured properly in test mode.',
                stripeMessage: error.message
            }, { status: 400 });
        }

        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
