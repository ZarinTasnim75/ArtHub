"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPalette, FaPlus, FaMoneyBillWave, FaUser } from "react-icons/fa";

export default function ArtistLayout({ children }) {

    const pathname = usePathname();

    return (
        <div className="min-h-screen flex">

            <aside className="w-72 bg-black text-white p-8">

                <h1 className="text-3xl font-black tracking-[0.15em] mb-10">
                    ARTHUB
                </h1>

                <div className="space-y-3">

                    <Link
                        href="/dashboard/artist"
                        className="block border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Dashboard
                    </Link>

                    <Link
                        href="/dashboard/artist/my-artworks"
                        className="block border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Manage Artworks
                    </Link>

                    <Link
                        href="/dashboard/artist/add-artwork"
                        className="block border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Add Artwork
                    </Link>

                    <Link
                        href="/dashboard/artist/sales"
                        className="block border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Sales History
                    </Link>

                    <Link
                        href="/dashboard/artist/profile"
                        className="block border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Profile
                    </Link>

                </div>

            </aside>

            <main className="flex-1 p-10">
                {children}
            </main>
        </div>
    );
}