"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { authClient } from "../../../lib/auth-client";

const ArtistArtworksPage = () => {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { data: session } = authClient.useSession();

    useEffect(() => {
        if (!session?.user?.email) return;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-artworks?email=${session.user.email}`)
            .then(res => res.json())
            .then(data => {
                setArtworks(data);
                setLoading(false);
            });
    }, [session]);

    const handleDelete = async (id) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/artworks/${id}`, {
            method: "DELETE",
        });

        const data = await res.json();

        if (data.deletedCount > 0) {
            toast.success("Artwork deleted");
            setArtworks(prev => prev.filter(item => item._id !== id));
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-black uppercase tracking-wider">
                    My Artworks
                </h1>
            </div>

            <div className="overflow-x-auto border">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {artworks.map((artwork) => (
                            <tr key={artwork._id}>
                                <td>{artwork.title}</td>
                                <td>{artwork.category}</td>
                                <td>${artwork.price}</td>

                                <td className="space-x-2">
                                    <Link
                                        href={`/dashboard/artist/edit/${artwork._id}`}
                                        className="btn btn-sm"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => handleDelete(artwork._id)}
                                        className="btn btn-error btn-sm text-white"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ArtistArtworksPage;