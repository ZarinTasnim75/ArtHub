"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dashboardOpen, setDashboardOpen] = useState(false);

    const user = false;
    const role = "artist";

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Browse Artworks", href: "/artworks" },
    ];

    const navStyle = (href) => `uppercase text-sm font-bold tracking-wider pb-1 border-b-2 transition-all duration-300 
    ${pathname === href ? "border-[#8B6B3F] text-black" : "border-transparent hover:border-[#8B6B3F]"}`;

    return (
        <header className="border-b border-neutral-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="hidden lg:grid lg:grid-cols-3 items-center h-24">

                    <div className="justify-self-start">
                        <nav className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className={navStyle(link.href)} > {link.name} </Link>))}

                            {user && (
                                <div className="dropdown dropdown-hover inline-flex items-center relative">
                                    <Link href="/dashboard" className={`uppercase text-sm font-bold tracking-wider pb-1 border-b-2
                                    ${pathname.includes("/dashboard") ? "border-[#8B6B3F]" : "border-transparent hover:border-[#8B6B3F]"}`}> Dashboard</Link>

                                    <ul className=" dropdown-content menu bg-base-100 rounded-box w-56 shadow-lg absolute top-full left-0 mt-2 z-5 ">
                                        {role === "admin" && (
                                            <li>
                                                <Link href="/dashboard/admin"> Admin Dashboard </Link>
                                            </li>
                                        )}

                                        {role === "artist" && (
                                            <li>
                                                <Link href="/dashboard/artist">  Artist Dashboard </Link>
                                            </li>
                                        )}

                                        {role === "user" && (
                                            <li>
                                                <Link href="/dashboard/user"> User Dashboard </Link>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </nav>
                    </div>


                    <div className="justify-self-center">
                        <Link href="/" className=" text-4xl font-black tracking-[0.25em] uppercase hover:opacity-80 transition " > ARTHUB </Link>
                    </div>

                    <div className="justify-self-end">
                        {user ? (
                            <button className=" border-2 border-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition " >
                                Logout
                            </button>
                        ) : (
                            <Link href="/auth/login" className=" border-2 border-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition " >
                                Login </Link>
                        )}
                    </div>
                </div>

                <div className="lg:hidden flex items-center justify-between h-20">

                    <button onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />} </button>

                    <Link href="/" className="text-2xl font-black tracking-[0.2em]"> ARTHUB </Link>

                    <div className="w-6" />
                </div>

                {menuOpen && (
                    <div className="lg:hidden border-t py-4 flex flex-col gap-4">

                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} className={`font-semibold pb-1 border-b-2 w-fit ${pathname === link.href ? "border-[#8B6B3F] text-black"
                                : "border-transparent hover:border-[#8B6B3F]"}`}
                                onClick={() => setMenuOpen(false)} > {link.name} </Link>))}

                        {user && (
                            <div className="flex flex-col">

                                <button onClick={() => setDashboardOpen(!dashboardOpen)}
                                    className={`font-semibold pb-1 border-b-2 w-fit flex items-center gap-2 ${pathname.includes("/dashboard")
                                            ? "border-[#8B6B3F] text-black" : "border-transparent hover:border-[#8B6B3F]" }`} >
                                    Dashboard
                                    <span className="text-xs">
                                        {dashboardOpen ? "▲" : "▼"}
                                    </span>
                                </button>

                                {dashboardOpen && (
                                    <div className="ml-4 mt-3 flex flex-col gap-3 border-l-2 border-[#d8b77b] pl-4">

                                        {role === "admin" && (
                                            <Link  href="/dashboard/admin" onClick={() => setMenuOpen(false)} className="text-gray-700" >
                                                Admin Dashboard
                                            </Link>
                                        )}

                                        {role === "artist" && (
                                            <Link href="/dashboard/artist" onClick={() => { 
                                                    setMenuOpen(false); 
                                                    setDashboardOpen(false);
                                                }}
                                                className="text-gray-700"
                                            >
                                                Artist Dashboard
                                            </Link>
                                        )}

                                        {role === "user" && (
                                            <Link href="/dashboard/user" onClick={() => {
                                                    setMenuOpen(false);
                                                    setDashboardOpen(false);
                                                }}
                                                className="text-gray-700"
                                            >
                                                User Dashboard
                                            </Link>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}

                        {user ? (
                            <button className=" w-fit border-2 border-black px-6 py-2 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition "
                                onClick={() => setMenuOpen(false)}
                            >
                                Logout
                            </button>
                        ) : (
                            <Link href="/auth/login"
                                className={`font-semibold pb-1 border-b-2 w-fit ${pathname === "/auth/login"
                                        ? "border-[#8B6B3F]" : "border-transparent hover:border-[#8B6B3F]"
                                    }`}
                                onClick={() => setMenuOpen(false)} >  Login
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </header>
    );
}