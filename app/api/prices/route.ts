import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export const runtime = 'nodejs';

function getStripe() {
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set');
    return new Stripe(key, { apiVersion: '2025-06-30.basil' as any });
}

export async function GET() {
    try {
        const stripe = getStripe();
        const monthlyId = process.env.MONTHLY_PRICE_ID;
        const yearlyId = process.env.YEARLY_PRICE_ID;

        if (!monthlyId || !yearlyId) {
            return NextResponse.json(
                { error: 'Price IDs not set' },
                { status: 500 },
            );
        }

        const [monthly, yearly] = await Promise.all([
            stripe.prices.retrieve(monthlyId),
            stripe.prices.retrieve(yearlyId),
        ]);

        const fmt = (p: Stripe.Price) =>
            p.unit_amount != null && p.currency
                ? (p.unit_amount / 100).toLocaleString('en-US', {
                      style: 'currency',
                      currency: p.currency.toUpperCase(),
                      minimumFractionDigits: 2,
                  })
                : null;

        return NextResponse.json({
            monthly: fmt(monthly),
            yearly: fmt(yearly),
        });
    } catch (err) {
        console.error('Prices fetch error:', err);
        return NextResponse.json(
            { error: 'Failed to fetch prices' },
            { status: 500 },
        );
    }
}
