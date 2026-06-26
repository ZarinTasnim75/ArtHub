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
        <div className="min-h-screen flex bg-[#FAF8F5]">


            <aside className="w-72 bg-black text-white p-8">

                <h1 className="text-3xl font-black tracking-[0.18em] mb-10 uppercase">
                    Navigation
                </h1>

                <nav className="space-y-3">

                    {menu.map((item) => (

                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded transition
                            ${
                                pathname === item.href
                                    ? "bg-[#8B6B3F]"
                                    : "hover:bg-neutral-800"
                            }`}
                        >
                            {item.icon}
                            <span className="font-bold tracking-wide"> {item.name} </span>
                        </Link>
                    ))}

                </nav>

            </aside>
            <main className="flex-1 p-10">
                {children}
            </main>

        </div>
    );
}