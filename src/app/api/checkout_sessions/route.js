import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "../../lib/auth";
import { stripe } from "../../lib/stripe";

export async function POST(request) {

    const PLAN_PRICE_ID = {
    pro: process.env.STRIPE_PRO_PRICE_ID,
    premium: process.env.STRIPE_PREMIUM_PRICE_ID,
};
  const user_session = await auth.api.getSession({
    headers: await headers(),
  });

  // if (!user_session?.user) {
  //     return NextResponse.json(
  //         { error: "Unauthorized" },
  //         { status: 401 }
  //     );
  // }

  if (!user_session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const headersList = await headers();
    const origin = headersList.get("origin");
    const formData = await request.formData();
    const planId = formData.get("plan_id");
    const priceId = PLAN_PRICE_ID[planId];

    // Create Checkout Sessions from body params.
    const checkout_session = await stripe.checkout.sessions.create({
      customer_email: user_session.user.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${origin}/dashboard/user/subscription/success?session_id={CHECKOUT_SESSION_ID}`,
    });
    return NextResponse.redirect(checkout_session.url, 303);
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}