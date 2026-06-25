"use client";

import { FaUsers, FaPaintBrush, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";
import AdminCharts from "./AdminCharts";

const AdminDashboard = () => {
 
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

            {/* Header */}
            <div className="border-b border-neutral-300 pb-6">
                <h1 className="text-4xl font-black tracking-[0.15em] uppercase">
                    Admin Dashboard
                </h1>

                <p className="mt-3 text-gray-500 font-extrabold">
                    Platform management and analytics overview
                </p>
            </div>

            {/* Analytics Cards */}
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">

                <div className="border bg-white p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
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

                <div className="border bg-white p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Artists
                        </p>

                        <h2 className="text-5xl font-black text-[#8B6B3F] mt-3">
                            34
                        </h2>
                    </div>

                    <FaPaintBrush className="text-4xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Artworks Sold
                        </p>

                        <h2 className="text-5xl font-black text-[#8B6B3F] mt-3">
                            286
                        </h2>
                    </div>

                    <FaShoppingCart className="text-4xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white p-6 flex items-center justify-between hover:shadow-xl transition duration-300">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Revenue
                        </p>

                        <h2 className="text-5xl font-black text-[#8B6B3F] mt-3">
                            $12.4K
                        </h2>
                    </div>

                    <FaMoneyBillWave className="text-4xl text-[#8B6B3F]" />
                </div>

            </div>

            <AdminCharts />

        </div>
    );
};

export default AdminDashboard;