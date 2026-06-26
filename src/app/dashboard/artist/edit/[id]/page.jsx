"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditArtworkPage = () => {
    const { id } = useParams();
    const router = useRouter();

    const [artwork, setArtwork] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/artworks/${id}`)
            .then(res => res.json())
            .then(data => {
                setArtwork(data);
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        setUpdating(true);

        const form = e.target;

        const updatedArtwork = {
            title: form.title.value,
            description: form.description.value,
            category: form.category.value,
            price: Number(form.price.value),
        };

        const res = await fetch(
            `http://localhost:5000/artworks/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedArtwork),
            }
        );

        const data = await res.json();

        if (data.modifiedCount > 0) {
            toast.success("Artwork Updated");
            router.push("/dashboard/artist/my-artworks");
        } else {
            toast.error("No Changes Made");
        }

        setUpdating(false);
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
            <h1 className="text-3xl font-black uppercase tracking-wider mb-8">
                Edit Artwork
            </h1>

            <form
                onSubmit={handleUpdate}
                className="max-w-3xl border border-neutral-300 p-8 space-y-5"
            >
                <div>
                    <label className="font-bold block mb-2">
                        Title
                    </label>

                    <input
                        name="title"
                        defaultValue={artwork.title}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="font-bold block mb-2">
                        Description
                    </label>

                    <textarea
                        name="description"
                        defaultValue={artwork.description}
                        className="textarea textarea-bordered w-full"
                        rows={5}
                        required
                    />
                </div>

                <div>
                    <label className="font-bold block mb-2">
                        Category
                    </label>

                    <input
                        name="category"
                        defaultValue={artwork.category}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div>
                    <label className="font-bold block mb-2">
                        Price
                    </label>

                    <input
                        type="number"
                        name="price"
                        defaultValue={artwork.price}
                        className="input input-bordered w-full"
                        required
                    />
                </div>

                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="btn bg-[#8B6B3F] text-white hover:bg-[#6F542F]"
                    >
                        {updating ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Save Changes"
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() =>
                            router.push("/dashboard/artist/my-artworks")
                        }
                        className="btn btn-outline"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditArtworkPage;