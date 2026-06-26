"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaUsers, FaPalette, FaMoneyBillWave, FaChartBar, FaSignOutAlt } from "react-icons/fa";

export default function AdminLayout({ children }) {
    const pathname = usePathname();

    const links = [
        {
            name: "Manage Users",
            href: "/dashboard/admin/users",
            icon: <FaUsers />,
        },
        {
            name: "Manage Artworks",
            href: "/dashboard/admin/artworks",
            icon: <FaPalette />,
        },
        {
            name: "Transactions",
            href: "/dashboard/admin/transactions",
            icon: <FaMoneyBillWave />,
        },
    ];

    return (
        <div className="min-h-screen flex">

            <aside className="w-72 bg-black text-white p-8">

                <h2 className="text-3xl font-black tracking-[0.15em] uppercase mb-12">
                    Navigation
                </h2>

                <nav className="space-y-3">

                    <Link
                        href="/dashboard/admin"
                        className={`flex items-center gap-3 px-4 py-3 border font-extrabold tracking-wide transition
                        ${
                            pathname === "/dashboard/admin"
                                ? "bg-[#8B6B3F] border-[#8B6B3F]"
                                : "border-neutral-700 hover:border-[#8B6B3F]"
                        }`}
                    >
                        <FaChartBar />
                        Overview
                    </Link>

                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 border font-extrabold tracking-wide transition
                            ${
                                pathname === link.href
                                    ? "bg-[#8B6B3F] border-[#8B6B3F]"
                                    : "border-neutral-700 hover:border-[#8B6B3F]"
                            }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    ))}

                </nav>

                <button className="mt-12 w-full border border-[#8B6B3F] py-3 font-extrabold uppercase tracking-widest hover:bg-[#8B6B3F] transition flex items-center justify-center gap-2">
                    <FaSignOutAlt />
                    Logout
                </button>

            </aside>

            <main className="flex-1 bg-white">
                {children}
            </main>

        </div>
    );
}