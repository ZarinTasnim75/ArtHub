import { FaPalette, FaMoneyBillWave } from "react-icons/fa";

export default function ArtistDashboard() {

    return (
        <div>

            <h1 className="text-4xl font-black uppercase">
                Artist Dashboard
            </h1>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

                <div className="border p-6">
                    <h2 className="font-black text-xl">
                        Total Artworks
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        15
                    </p>
                </div>

                <div className="border p-6">
                    <h2 className="font-black text-xl">
                        Total Revenue
                    </h2>

                    <p className="text-5xl font-black mt-4">
                        $2500
                    </p>
                </div>

            </div>

        </div>
    );
}