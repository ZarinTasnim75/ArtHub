"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    FaHome,
    FaShoppingBag,
    FaImages,
    FaCrown,
    FaUserCog,
} from "react-icons/fa";

export default function UserLayout({ children }) {
    const pathname = usePathname();

    const menu = [
        {
            name: "Overview",
            href: "/dashboard/user",
            icon: <FaHome />,
        },
        {
            name: "Purchase History",
            href: "/dashboard/user/purchases",
            icon: <FaShoppingBag />,
        },
        {
            name: "My Collection",
            href: "/dashboard/user/collection",
            icon: <FaImages />,
        },
        {
            name: "Subscription",
            href: "/dashboard/user/subscription",
            icon: <FaCrown />,
        },
        {
            name: "Profile",
            href: "/dashboard/user/profile",
            icon: <FaUserCog />,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-[#FAF8F5]">

            <aside className="w-full lg:w-72 bg-black text-white p-5 lg:p-8">

                <h1 className="text-2xl lg:text-3xl font-black tracking-[0.08em] lg:tracking-[0.18em] uppercase mb-6 lg:mb-10 text-center lg:text-left">
                    Navigation
                </h1>

                <nav className="grid grid-cols-2 lg:grid-cols-1 gap-3">

                    {menu.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center justify-center lg:justify-start gap-3 px-4 py-3 rounded transition text-sm lg:text-base
                ${pathname === item.href
                                    ? "bg-[#8B6B3F]"
                                    : "hover:bg-neutral-800"
                                }`}
                        >
                            {item.icon}
                            <span className="font-bold tracking-wide">
                                {item.name}
                            </span>
                        </Link>
                    ))}

                </nav>

            </aside>
            <main className="flex-1 p-4 sm:p-6 lg:p-10">
                {children}
            </main>

        </div>
    );
}