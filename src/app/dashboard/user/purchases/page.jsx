"use client";

import { useEffect, useState } from "react";
import { authClient } from "../../../lib/auth-client";

export default function PurchasesPage() {

    const { data: session } = authClient.useSession();

    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!session?.user?.email) return;

        fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/purchases?email=${session.user.email}`
        )
            .then(res => res.json())
            .then(data => {

                setPurchases(data);
                setLoading(false);

            });

    }, [session]);

    if (loading) {

        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );

    }

    return (

        <div>

            <h1 className="text-4xl font-black uppercase tracking-[0.15em]">
                Purchase History
            </h1>

            <div className="overflow-x-auto border mt-8">

                <table className="table">

                    <thead>

                        <tr>
                            <th>Artwork</th>
                            <th>Artist</th>
                            <th>Price</th>
                            <th>Date</th>
                        </tr>

                    </thead>

                    <tbody>

                        {purchases.length === 0 ? (

                            <tr>

                                <td
                                    colSpan="4"
                                    className="text-center py-12"
                                >
                                    No purchases yet.
                                </td>

                            </tr>

                        ) : (

                            purchases.map((purchase) => (

                                <tr key={purchase._id}>

                                    <td>{purchase.title}</td>

                                    <td>{purchase.artistName}</td>

                                    <td>${purchase.price}</td>

                                    <td>
                                        {new Date(
                                            purchase.purchaseDate
                                        ).toLocaleDateString()}
                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>

    );
}