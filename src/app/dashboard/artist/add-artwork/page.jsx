"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { authClient } from "../../../lib/auth-client";

export default function AddArtwork() {
    const [loading, setLoading] = useState(false);
    const { data: session } = authClient.useSession();

    const handleSubmit = async (e) => {
        if (!session?.user) {
            toast.error("Please login first");
            return;
        }

        e.preventDefault();

        try {
            setLoading(true);

            const form = e.target;

            const title = form.title.value.trim();
            const description = form.description.value.trim();
            const category = form.category.value.trim();
            const price = parseFloat(form.price.value);
            const imageFile = form.image.files[0];


            if (!title || !description || !category) {
                return toast.error("All fields are required");
            }

            if (!imageFile) {
                return toast.error("Please select an image");
            }

            if (!imageFile.type.startsWith("image/")) {
                return toast.error("Only image files are allowed");
            }

            if (price <= 0) {
                return toast.error("Price must be greater than 0");
            }

            const formData = new FormData();
            formData.append("image", imageFile);

            const imageUpload = await axios.post(
                `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                formData
            );

            const imageUrl = imageUpload.data?.data?.display_url;

            if (!imageUrl) {
                throw new Error("Image upload failed");
            }

            const userRes = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/users?email=${session.user.email}`
            );

            const artwork = {
                title,
                description,
                category,
                price,
                image: imageUrl,
                artistName: session.user.name,
                artistEmail: session.user.email,
                artistImage: userRes.data.artistImage || "",
                createdAt: new Date(),
            };
            const result = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/artworks`, artwork );

            if (result.data.insertedId) {
                toast.success("Artwork added successfully");
                form.reset();
            }
        } catch (error) {
            console.error(error);
            toast.error("Failed to add artwork");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl">
            <div className="border border-neutral-300 p-8 lg:p-10">

                <h1 className="text-3xl font-black uppercase tracking-[0.15em] mb-2">
                    Add Artwork
                </h1>

                <p className="text-gray-500 font-semibold mb-8">
                    Upload a new artwork to your gallery
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5" >
                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm tracking-wider">
                            Artwork Title
                        </label>

                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Artwork title"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm tracking-wider">
                            Description
                        </label>

                        <textarea
                            name="description"
                            required
                            rows="5"
                            placeholder="Describe your artwork"
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm tracking-wider">
                            Category
                        </label>

                        <select
                            name="category"
                            required
                            className="select select-bordered w-full"
                        >
                            <option value="">Select Category</option>
                            <option>Landscape</option>
                            <option>Portrait</option>
                            <option>Abstract</option>
                            <option>Modern</option>
                            <option>Nature</option>
                            <option>Digital Art</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm tracking-wider">
                            Price ($)
                        </label>

                        <input
                            type="number"
                            min="1"
                            name="price"
                            required
                            placeholder="Enter artwork price"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-bold uppercase text-sm tracking-wider">
                            Artwork Image
                        </label>

                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            required
                            className="file-input file-input-bordered w-full"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full border-2 border-[#8B6B3F] py-3 font-black uppercase tracking-[0.15em] hover:bg-[#8B6B3F] hover:text-white transition disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Uploading...
                            </>
                        ) : (
                            "Add Artwork"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}