"use client";
import { useEffect } from "react";
import { FaShoppingBag, FaCrown, FaPalette } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";

export default function UserDashboard() {
    const { data: session } = authClient.useSession();
// get JWT for Google sign-ins (and as a fallback for anyone landing here without one)
   useEffect(() => {
    const getToken = async () => {
        if (!session?.user?.email) return;

        const existingToken = localStorage.getItem("access-token");

        if (existingToken) {
            // decode without verifying, just to check whose token it is
            const payload = JSON.parse(atob(existingToken.split(".")[1]));
            if (payload.email === session.user.email) return; // still valid for this user
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jwt`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: session.user.email }),
        });
        const { token } = await res.json();
        localStorage.setItem("access-token", token);
    };

    getToken();
}, [session]);

    const { data: userInfo } = useQuery({
        queryKey: ["user", session?.user?.email],
        enabled: !!session?.user?.email,
        queryFn: async () => {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/users?email=${session.user.email}`
            );
            return res.data;
        },
    });
    const { data: purchases = [] } = useQuery({
        queryKey: ["purchases", session?.user?.email],
        enabled: !!session?.user?.email,
        queryFn: async () => {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/purchased-artworks?email=${session.user.email}`
            );
            return res.data;
        },
    });

    const currentPlan = userInfo?.plan || "Free";

    const maxPurchases = userInfo?.maxPurchases || 3;

    const totalPurchases = purchases.length;

    const remainingPurchases = Math.max(
        maxPurchases - totalPurchases,
        0
    );
    return (
        <div className="max-w-7xl mx-auto">

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 mt-8">

                <div className="border bg-white rounded-xl p-5 lg:p-6 hover:shadow-xl transition">

                    <FaShoppingBag className="text-[#8B6B3F] text-3xl lg:text-4xl" />

                    <h2 className="mt-5 uppercase text-sm tracking-widest text-neutral-500 font-bold">
                        Total Purchases
                    </h2>

                    <p className="text-3xl lg:text-5xl font-black mt-3">
                        {totalPurchases}
                    </p>

                    <p className="text-neutral-500 mt-2">
                        Purchased artworks
                    </p>

                </div>

                <div className="border bg-white rounded-xl p-6 lg:p-8 hover:shadow-xl transition">

                    <FaCrown
                        className="text-yellow-500"
                        size={34}
                    />

                    <h2 className="mt-5 uppercase text-sm tracking-widest text-neutral-500 font-bold">
                        Current Plan
                    </h2>

                    <p className="text-5xl font-black mt-4 text-[#8B6B3F]">
                        {currentPlan}
                    </p>

                    <p className="text-neutral-500 mt-2">
                        {maxPurchases === -1
                            ? "Unlimited artworks allowed"
                            : `${maxPurchases} artworks allowed`}
                    </p>

                </div>

                <div className="border bg-white rounded-xl p-6 lg:p-8 hover:shadow-xl transition">

                    <FaPalette
                        className="text-green-600"
                        size={34}
                    />

                    <h2 className="mt-5 uppercase text-sm tracking-widest text-neutral-500 font-bold">
                        Remaining
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        {maxPurchases === -1 ? "∞" : remainingPurchases}
                    </p>

                    <p className="text-neutral-500 mt-2">
                        Purchases left
                    </p>

                </div>

            </div>


            <div className="mt-10 lg:mt-12 border bg-white rounded-xl p-6 lg:p-10">

                <h2 className="text-2xl lg:text-3xl font-black uppercase">
                    Welcome to ArtHub
                </h2>

                <p className="mt-4 leading-7 lg:leading-8 text-sm lg:text-base text-neutral-600">

                    Explore unique artworks from talented artists around
                    the world. Purchase original paintings, manage your
                    collection, review your purchase history and upgrade
                    your subscription whenever you need more purchase
                    capacity.

                </p>

            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 mt-10">

                <div className="border bg-white rounded-xl p-6 lg:p-8 hover:shadow-xl transition">

                    <h2 className="font-black text-xl lg:text-2xl uppercase">
                        Recent Activity
                    </h2>

                    <p className="mt-4 text-neutral-500">
                        Your recent purchases will appear here.
                    </p>
                </div>
                <div className="border bg-white rounded-xl p-6 lg:p-8 hover:shadow-xl transition">

                    <h2 className="font-black text-xl lg:text-2xl uppercase">
                        Subscription Status
                    </h2>

                    <p className="mt-4 text-neutral-500">
                        You are currently using the{" "}
                        <span className="font-bold text-[#8B6B3F]">
                            {currentPlan} Plan
                        </span>.
                    </p>
                    <Link href="/dashboard/user/subscription">
                        <button className="btn bg-[#8B6B3F] text-white mt-6 w-full sm:w-auto">
                            Upgrade Plan
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}