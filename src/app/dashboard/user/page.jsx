"use client";

import { FaShoppingBag, FaCrown, FaPalette } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { authClient } from "../../lib/auth-client";
import Link from "next/link";

export default function UserDashboard() {
    const { data: session } = authClient.useSession();

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
    console.log(userInfo);
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
        <div>

            <div className="grid lg:grid-cols-3 gap-8 mt-10">

                <div className="border bg-white p-8">

                    <FaShoppingBag className="text-[#8B6B3F]" size={34} />

                    <h2 className="mt-5 uppercase text-sm tracking-widest text-neutral-500 font-bold">
                        Total Purchases
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        {totalPurchases}
                    </p>

                    <p className="text-neutral-500 mt-2">
                        Purchased artworks
                    </p>

                </div>

                <div className="border bg-white p-8">

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

                <div className="border bg-white p-8">

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


            <div className="mt-12 border bg-white p-10">

                <h2 className="text-3xl font-black uppercase">
                    Welcome to ArtHub
                </h2>

                <p className="mt-5 leading-8 text-neutral-600">

                    Explore unique artworks from talented artists around
                    the world. Purchase original paintings, manage your
                    collection, review your purchase history and upgrade
                    your subscription whenever you need more purchase
                    capacity.

                </p>

            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-10">

                <div className="border bg-white p-8">

                    <h2 className="font-black text-2xl uppercase">
                        Recent Activity
                    </h2>

                    <p className="mt-4 text-neutral-500">
                        Your recent purchases will appear here.
                    </p>

                </div>

                <div className="border bg-white p-8">

                    <h2 className="font-black text-2xl uppercase">
                        Subscription Status
                    </h2>

                    <p className="mt-4 text-neutral-500">
                        You are currently using the{" "}
                        <span className="font-bold text-[#8B6B3F]">
                            {currentPlan} Plan
                        </span>.
                    </p>

                  

                </div>

            </div>

        </div>
    );
}