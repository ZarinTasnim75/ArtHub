"use client";

import { useEffect, useState } from "react";

const ArtistSalesPage = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/sales/:email`)
            .then(res => res.json())
            .then(data => setSales(data));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-black uppercase tracking-wider mb-8">
                Sales History
            </h1>

            <div className="overflow-x-auto border">
                <table className="table">

                    <thead>
                        <tr>
                            <th>Artwork</th>
                            <th>Buyer</th>
                            <th>Purchase Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>

                    <tbody>

                        {sales.map((sale) => (
                            <tr key={sale._id}>
                                <td>{sale.artworkTitle}</td>
                                <td>{sale.buyerName}</td>
                                <td>{sale.purchaseDate}</td>
                                <td>${sale.amount}</td>
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ArtistSalesPage;