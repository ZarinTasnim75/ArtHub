"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPalette, FaPlus, FaMoneyBillWave, FaUser } from "react-icons/fa";

export default function ArtistLayout({ children }) {

    const pathname = usePathname();

    return (
        <div className="min-h-screen flex flex-col lg:flex-row">

            <aside className="w-full lg:w-72 bg-black text-white p-5 lg:p-8">

                <h1 className="text-3xl font-black tracking-[0.15em] mb-10 uppercase">
                    Navigation
                </h1>

                <div className="space-y-3">

                    <Link
                        href="/dashboard/artist"
                        className=" flex items-center justify-center lg:justify-start gap-3 px-4 py-3 text-sm lg:text-base  tracking-wide transition border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Overview
                    </Link>

                    <Link
                        href="/dashboard/artist/my-artworks"
                       className=" flex items-center justify-center lg:justify-start gap-3 px-4 py-3 text-sm lg:text-base  tracking-wide transition border p-3 font-bold hover:border-[#8B6B3F]"

                    >
                        Manage Artworks
                    </Link>

                    <Link
                        href="/dashboard/artist/add-artwork"
                        className=" flex items-center justify-center lg:justify-start gap-3 px-4 py-3 text-sm lg:text-base  tracking-wide transition border p-3 font-bold hover:border-[#8B6B3F]"

                    >
                        Add Artwork
                    </Link>

                    <Link
                        href="/dashboard/artist/sales"
                        className=" flex items-center justify-center lg:justify-start gap-3 px-4 py-3 text-sm lg:text-base  tracking-wide transition border p-3 font-bold hover:border-[#8B6B3F]"

                    >
                        Sales History
                    </Link>

                    <Link
                        href="/dashboard/artist/profile"
                        className=" flex items-center justify-center lg:justify-start gap-3 px-4 py-3 text-sm lg:text-base  tracking-wide transition border p-3 font-bold hover:border-[#8B6B3F]"
                    >
                        Profile
                    </Link>
                    

                </div>

            </aside>

            <main className="flex-1 bg-white p-4 lg:p-0">
                {children}
            </main>
        </div>
    );
}