"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "../../../lib/auth-client";

export default function CollectionPage() {

    const { data: session } = authClient.useSession();

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (!session?.user?.email) return;

        fetch(
            `http://localhost:5000/purchased-artworks?email=${session.user.email}`
        )
            .then(res => res.json())
            .then(data => {

                setArtworks(data);
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
                My Collection
            </h1>

            {artworks.length === 0 ? (

                <div className="text-center py-20">

                    <h2 className="text-2xl font-bold">
                        No Purchased Artworks
                    </h2>

                </div>

            ) : (

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10">

                    {artworks.map((artwork) => (

                        <div
                            key={artwork._id}
                            className="border"
                        >

                            <div className="relative h-80">

                                <Image
                                    src={artwork.image}
                                    alt={artwork.title}
                                    fill
                                    unoptimized
                                    className="object-cover"
                                />

                            </div>

                            <div className="p-6">

                                <h2 className="text-xl font-black">

                                    {artwork.title}

                                </h2>

                                <p className="mt-2 text-neutral-500">

                                    By {artwork.artistName}

                                </p>

                                <p className="mt-3 text-[#8B6B3F] font-bold">

                                    ${artwork.price}

                                </p>

                                <Link
                                    href={`/artworks/${artwork.artworkId}`}
                                    className="btn mt-6 bg-[#8B6B3F] text-white"
                                >
                                    View Artwork
                                </Link>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}