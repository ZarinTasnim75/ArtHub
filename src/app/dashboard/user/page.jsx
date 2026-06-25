"use client";

import Image from "next/image";
import { useSession } from "../../lib/auth-client";

const UserDashboard = () => {
    const { data: session } = useSession();

    const purchases = [
        {
            id: 1,
            artwork: "Golden Horizon",
            artist: "John Smith",
            price: "$120",
            date: "2026-06-20",
        },
        {
            id: 2,
            artwork: "Silent Forest",
            artist: "Emma Watson",
            price: "$180",
            date: "2026-06-15",
        },
    ];

    const artworks = [
        {
            id: 1,
            title: "Golden Horizon",
            image: "/assets/art1.jpg",
        },
        {
            id: 2,
            title: "Silent Forest",
            image: "/assets/art2.jpg",
        },
        {
            id: 3,
            title: "Ocean Dream",
            image: "/assets/art3.jpg",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

            {/* Header */}
            <div className="border-b border-neutral-300 pb-6">
                <h1 className="text-4xl font-black tracking-[0.15em] uppercase">
                    User Dashboard
                </h1>

                <p className="mt-3 text-gray-500 font-extrabold">
                    Welcome back, {session?.user?.name || "User"}
                </p>
            </div>

            {/* Overview */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">

                <div className="border p-6">
                    <h3 className="uppercase font-bold text-sm tracking-wider text-gray-500">
                        Total Purchases
                    </h3>

                    <p className="text-4xl font-black mt-3">
                        2
                    </p>
                </div>

                <div className="border p-6">
                    <h3 className="uppercase font-bold text-sm tracking-wider text-gray-500">
                        Subscription
                    </h3>

                    <p className="text-4xl font-black mt-3 text-[#8B6B3F]">
                        Free
                    </p>
                </div>

                <div className="border p-6">
                    <h3 className="uppercase font-bold text-sm tracking-wider text-gray-500">
                        Remaining Slots
                    </h3>

                    <p className="text-4xl font-black mt-3">
                        1
                    </p>
                </div>

            </div>

            {/* Purchase History */}
            <div className="mt-12">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Purchase History
                </h2>

                <div className="overflow-x-auto border">

                    <table className="table">

                        <thead>
                            <tr>
                                <th>Artwork</th>
                                <th>Artist</th>
                                <th>Price</th>
                                <th>Purchase Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {purchases.map((purchase) => (
                                <tr key={purchase.id}>
                                    <td>{purchase.artwork}</td>
                                    <td>{purchase.artist}</td>
                                    <td>{purchase.price}</td>
                                    <td>{purchase.date}</td>
                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>

            {/* Bought Artworks */}
            <div className="mt-14">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Bought Artworks
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {artworks.map((artwork) => (
                        <div key={artwork.id} className="border">

                            <div className="relative h-72">
                                <Image
                                    src={artwork.image}
                                    alt={artwork.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-5">

                                <h3 className="font-bold text-lg">
                                    {artwork.title}
                                </h3>

                                <button className="mt-4 border border-[#8B6B3F] px-5 py-2 hover:bg-[#8B6B3F] hover:text-white transition">
                                    View Details
                                </button>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

            {/* Subscription Plans */}
            <div className="mt-14">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Subscription Overview
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="border p-6">
                        <h3 className="text-xl font-bold">
                            Free
                        </h3>

                        <p className="text-gray-500 mt-2">
                            3 Paintings
                        </p>

                        <p className="text-3xl font-black mt-4">
                            $0
                        </p>
                    </div>

                    <div className="border-2 border-[#8B6B3F] p-6">
                        <h3 className="text-xl font-bold">
                            Pro
                        </h3>

                        <p className="text-gray-500 mt-2">
                            9 Paintings
                        </p>

                        <p className="text-3xl font-black mt-4">
                            $9.99
                        </p>
                    </div>

                    <div className="border p-6">
                        <h3 className="text-xl font-bold">
                            Premium
                        </h3>

                        <p className="text-gray-500 mt-2">
                            Unlimited
                        </p>

                        <p className="text-3xl font-black mt-4">
                            $19.99
                        </p>
                    </div>

                </div>

            </div>

            {/* Profile */}
            <div className="mt-14">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Profile Management
                </h2>

                <div className="border p-6">

                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="font-black">
                                Full Name
                            </label>

                            <input
                                type="text"
                                defaultValue={session?.user?.name}
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        <div>
                            <label className="font-black">
                                Email
                            </label>

                            <input
                                type="email"
                                defaultValue={session?.user?.email}
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                        <div>
                            <label className="font-black">
                                New Password
                            </label>

                            <input
                                type="password"
                                className="input input-bordered w-full mt-2"
                            />
                        </div>

                    </div>

                    <button className="mt-6 border border-[#8B6B3F] px-8 py-3 uppercase font-bold hover:bg-[#8B6B3F] hover:text-white transition">
                        Save Changes
                    </button>

                </div>

            </div>

        </div>
    );
};

export default UserDashboard;