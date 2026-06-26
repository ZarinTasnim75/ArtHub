import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const SUBSCRIPTION_PRICE_ID = {
    'premium' : 'price_1TmdpoJ4Hh7f3bdbbdgCCTxr',
    'pro': 'price_1TmeJOJ4Hh7f3bdb9UKsN3eu'
}