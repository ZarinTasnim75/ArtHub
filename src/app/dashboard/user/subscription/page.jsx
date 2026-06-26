"use client";
import { FaCheckCircle, FaCrown } from "react-icons/fa";

export default function SubscriptionPage() {
    const currentPlan = "Free";

    const plans = [
        {
            name: "Free",
            id: "free",
            price: "$0",
            limit: "3 Paintings",
            color: "border-gray-300",
            button: "Current Plan",
            features: [
                "Purchase up to 3 artworks",
                "View purchase history",
                "Comment on artworks",
            ],
        },
        {
            name: "Pro",
            id: "pro",
            price: "$9.99",
            limit: "9 Paintings",
            color: "border-[#8B6B3F]",
            button: "Upgrade",
            popular: true,
            features: [
                "Purchase up to 9 artworks",
                "Priority support",
                "Early access to new collections",
                "Exclusive offers",
            ],
        },
        {
            name: "Premium",
            id: "premium",
            price: "$19.99",
            limit: "Unlimited",
            color: "border-black",
            button: "Go Premium",
            features: [
                "Unlimited purchases",
                "VIP support",
                "Exclusive artwork drops",
                "Premium member badge",
                "Special discounts",
            ],
        },
    ];

    return (
        <div>

            <h1 className="text-4xl font-black uppercase tracking-[0.15em]">
                Subscription Plans
            </h1>

            <p className="mt-3 text-gray-500">
                Choose the plan that best suits your collecting journey.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

                {plans.map((plan) => (

                    <div
                        key={plan.name}
                        className={`relative border-2 ${plan.color} rounded-xl p-8 bg-white shadow-sm hover:shadow-xl transition`}
                    >

                        {plan.popular && (
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8B6B3F] text-white px-5 py-1 rounded-full text-sm font-bold">
                                MOST POPULAR
                            </span>
                        )}

                        <FaCrown
                            className="text-[#8B6B3F]"
                            size={36}
                        />

                        <h2 className="text-3xl font-black mt-5">
                            {plan.name}
                        </h2>

                        <p className="text-5xl font-black mt-5">
                            {plan.price}
                        </p>

                        <p className="mt-2 text-gray-500">
                            {plan.limit}
                        </p>

                        <div className="mt-8 space-y-4">

                            {plan.features.map((feature) => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-3"
                                >
                                    <FaCheckCircle className="text-green-600" />

                                    <span>{feature}</span>
                                </div>

                            ))}

                        </div>
                        <form action="/api/checkout_sessions" method="POST">
                        <input type="hidden" name="plan_id" value={plan.id}></input>
                            <section>
                                <button type="submit" role="link" disabled={currentPlan === plan.name} className={`btn w-full mt-10 ${currentPlan === plan.name
                                        ? "btn-disabled"
                                        : "bg-[#8B6B3F] text-white"
                                    }`}>
                                    Checkout
                                </button>
                            </section>
                        </form>

                        {/* <button >
                            {currentPlan === plan.name
                                ? "Current Plan"
                                : plan.button}
                        </button> */}
                    </div>
                ))}
            </div>
        </div>
    );
}