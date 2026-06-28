"use client";

import { FaUsers, FaPaintBrush, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import AdminCharts from "./AdminCharts";

const AdminDashboard = () => {
 
    return (
        // <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

            <div className="border-b border-neutral-300 pb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-[0.08em] lg:tracking-[0.15em] uppercase">
                    Admin Dashboard
                </h1>

                <p className="mt-2 text-sm lg:text-base text-gray-500 font-semibold">
                    Platform management and analytics overview
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6 mt-8 lg:mt-10">

                <div className="border bg-white p-5 lg:p-6 rounded-xl flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Users
                        </p>

                        <h2 className="text-5xl font-black text-[#8B6B3F] mt-3">
                            120
                        </h2>
                    </div>

                    <FaUsers className="text-4xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white p-5 lg:p-6 rounded-xl flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Artists
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            34
                        </h2>
                    </div>

                    <FaPaintBrush className="text-4xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white p-5 lg:p-6 rounded-xl flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Artworks Sold
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            286
                        </h2>
                    </div>

                    <FaShoppingCart className="text-4xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white p-5 lg:p-6 rounded-xl flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Revenue
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            $12.4K
                        </h2>
                    </div>

                    <FaMoneyBillWave className="text-3xl lg:text-4xl text-[#8B6B3F]" />
                </div>

            </div>

            <AdminCharts />

        </div>
    );
};

export default AdminDashboard;