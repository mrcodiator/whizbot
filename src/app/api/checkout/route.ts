import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getUser } from '@/actions/user.actions';

export async function POST(req: Request) {
    try {
        const { priceId } = await req.json();
        const user = await getUser();

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'subscription',
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            customer_email: user.email,
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing`,
            metadata: {
                userId: user.id,
                priceId,
            },
        });

        return NextResponse.json({ sessionId: session.id });
    } catch (error) {
        console.error("Error creating checkout session:", error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
