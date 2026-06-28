import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { stripe } from "../../../../lib/stripe";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    throw new Error("Please provide a valid session_id (`cs_test_...`)");
  }

  const stripeSession = await stripe.checkout.sessions.retrieve(session_id);
  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = stripeSession;

  if (status === "complete") {
 
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/subscription`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: customerEmail,
          plan: metadata.plan,
          maxPurchases: Number(metadata.maxPurchases),
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update user subscription");
    }
  }

  if (status === "open") {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="max-w-lg w-full bg-white rounded-3xl shadow-2xl p-10 text-center border border-gray-100">
        <div className="flex justify-center">
          <div className="bg-green-100 p-4 rounded-full">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-800 mt-6">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mt-4">
          Thank you for your purchase! Your payment has been successfully
          processed.
        </p>

        <div className="mt-6 bg-gray-50 rounded-xl p-4">
          <p className="text-sm text-gray-500">Confirmation Email</p>
          <p className="font-semibold text-gray-800 break-all">
            {customerEmail}
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <Link
            href="/"
            className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Back to Home
          </Link>

          <Link
            href="/dashboard"
            className="block w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold py-3 rounded-xl transition"
          >
            Go to Dashboard
          </Link>
        </div>

        <p className="text-sm text-gray-500 mt-8">
          A confirmation email has been sent to{" "}
          <span className="font-medium">{customerEmail}</span>.
        </p>
      </div>
    </div>
  );
}