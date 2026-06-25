"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaPinterestP } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white ">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div>
                        <h2 className="text-3xl font-black tracking-[0.2em] mb-4"> ARTHUB </h2>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            Discover, share, and explore beautiful artworks from talented artists around the world.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-black mb-4">
                            Quick Links
                        </h3>

                        <div className="flex flex-col gap-2 text-gray-300">
                            <Link href="/" className="hover:text-white">
                                About
                            </Link>

                            <Link href="/" className="hover:text-white">
                                Contact
                            </Link>

                            <Link href="/" className="hover:text-white">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-black mb-4">
                            Newsletter
                        </h3>

                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe for updates on new artworks and exhibitions.
                        </p>

                        <div className="flex">
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 text-black bg-white outline-none" />

                            <button className="bg-[#8B6B3F] px-5 py-2 font-black hover:bg-[#735731] transition">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} ARTHUB. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4 text-lg">
                        <a href="#" className="hover:text-[#d8b77b] transition">
                            <FaFacebookF />
                        </a>

                        <a href="#" className="hover:text-[#d8b77b] transition">
                            <FaInstagram />
                        </a>

                        <a href="#" className="hover:text-[#d8b77b] transition">
                            <FaX />
                        </a>

                        <a href="#" className="hover:text-[#d8b77b] transition">
                            <FaPinterestP />
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;