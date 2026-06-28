import { FaPalette, FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";

export default function ArtistDashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 lg:py-10">

            <div className="border-b border-neutral-300 pb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-[0.08em] lg:tracking-[0.15em]">
                    Artist Dashboard
                </h1>

                <p className="mt-2 text-sm lg:text-base text-gray-500 font-semibold">
                    Manage your artworks and monitor your earnings.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6 mt-8">

                <div className="border bg-white rounded-xl p-5 lg:p-6 flex items-center justify-between hover:shadow-xl transition">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Artworks
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            15
                        </h2>
                    </div>

                    <FaPalette className="text-3xl lg:text-5xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white rounded-xl p-5 lg:p-6 flex items-center justify-between hover:shadow-xl transition">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Sales
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            32
                        </h2>
                    </div>

                    <FaShoppingCart className="text-3xl lg:text-5xl text-[#8B6B3F]" />
                </div>

                <div className="border bg-white rounded-xl p-5 lg:p-6 flex items-center justify-between hover:shadow-xl transition">
                    <div>
                        <p className="uppercase text-xs tracking-widest text-gray-500">
                            Total Revenue
                        </p>

                        <h2 className="text-3xl lg:text-5xl font-black text-[#8B6B3F] mt-2">
                            $2500
                        </h2>
                    </div>

                    <FaMoneyBillWave className="text-3xl lg:text-5xl text-[#8B6B3F]" />
                </div>

            </div>

        </div>
    );
}