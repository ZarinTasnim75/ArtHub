"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ArtworkDetailsClient = ({ artwork }) => {
    const router = useRouter();

    const handlePurchase = () => {
        router.push(`/checkout/${artwork._id}`);
    };

    const handleDelete = async () => {

        if (!confirm("Delete this artwork?")) return;

        const res = await fetch(
            `http://localhost:5000/artworks/${artwork._id}`,
            {
                method: "DELETE",
            }
        );

        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success("Artwork deleted");
            router.push("/dashboard/artist/my-artworks");
        }
    };
    const { data: session } = authClient.useSession();
    const isOwner =
        session?.user?.email === artwork.artistEmail;
    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 py-10">

                <div className="grid lg:grid-cols-2 gap-10">

                    <div className="relative h-[600px]">
                        <Image
                            src={artwork.image}
                            alt={artwork.title}
                            fill unoptimized
                            className="object-cover"
                        />
                    </div>

                    <div>

                        <h1 className="text-5xl font-black uppercase">
                            {artwork.title}
                        </h1>

                        <p className="mt-4 text-lg">
                            Artist:{" "}
                            <Link
                                href={`/artist/${artwork.artistEmail}`}
                                className="text-[#8B6B3F] hover:underline"
                            >
                                {artwork.artistName}
                            </Link>
                        </p>

                        <p className="mt-6 text-[#8B6B3F] text-3xl font-black">
                            ${artwork.price}
                        </p>
                        <p className="mt-4">
                            <span className="font-bold">Category:</span> {artwork.category}
                        </p>

                        <p className="mt-8 leading-relaxed">
                            {artwork.description}
                        </p>

                        <p className="mt-2">
                            <span className="font-bold">Uploaded:</span>{" "}
                            {new Date(artwork.createdAt).toLocaleDateString()}
                        </p>

                        {session ? (
                            <button
                                disabled={isOwner}
                                onClick={handlePurchase}
                                className="btn bg-[#8B6B3F] text-white mt-8 disabled:bg-gray-400"
                            >
                                {isOwner
                                    ? "You Own This Artwork"
                                    : "Purchase Artwork"}
                            </button>
                        ) : (
                            <button
                                disabled
                                className="btn btn-disabled mt-8"
                            >
                                Login to Purchase
                            </button>
                        )}

                    </div>

                    {isOwner && (
                        <div className="flex gap-4 mt-8">

                            <Link
                                href={`/dashboard/artist/edit/${artwork._id}`}
                                className="btn"
                            >
                                Edit Artwork
                            </Link>

                            <button
                                className="btn btn-error"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>

                        </div>
                    )}


                    {session && !isOwner ? (
                        <div className="mt-16">
                            <h2 className="text-2xl font-bold mb-4">
                                Comments
                            </h2>

                            <textarea
                                className="textarea textarea-bordered w-full"
                                placeholder="Write a comment..."
                            />

                            <button className="btn mt-4">
                                Post Comment
                            </button>
                        </div>
                    ) : !session ? (
                        <div className="mt-16 border p-6 rounded-lg">
                            Login to comment on this artwork.
                        </div>
                    ) : null}
                </div>

            </div>
        </div>
    );
};

export default ArtworkDetailsClient;