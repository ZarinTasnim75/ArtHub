"use client";

import { useState, useEffect } from "react";
import { authClient } from "../../../lib/auth-client";
import toast from "react-hot-toast";

const ArtistProfilePage = () => {
    const { data: session } = authClient.useSession();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [artistImage, setArtistImage] = useState(null);
    const [preview, setPreview] = useState("");

    useEffect(() => {
        if (session?.user) {
            setName(session.user.name || "");
            setEmail(session.user.email || "");
        }
    }, [session]);

    const handleSave = async () => {
        try {

            setLoading(true);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/profile`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        name,
                    }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success("Profile Updated");
            } else {
                toast.error("No profile found to update");
            }

        } catch (error) {
            toast.error("Failed to update profile");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-black uppercase tracking-wider mb-8">
                Profile Management
            </h1>

            <div className="max-w-xl border border-neutral-300 p-8 space-y-6">

                <div>
                    <label className="block font-extrabold uppercase text-sm tracking-wider mb-2">
                        Full Name
                    </label>

                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input input-bordered w-full font-bold"
                    />
                </div>

                <div>
                    <label className="block font-extrabold uppercase text-sm tracking-wider mb-2">
                        Email
                    </label>

                    <input
                        value={email}
                        readOnly
                        className="input input-bordered w-full font-bold bg-base-200"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-bold uppercase">
                        Artist Avatar
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                            const file = e.target.files[0];
                            setArtistImage(file);

                            if (file) {
                                setPreview(URL.createObjectURL(file));
                            }
                        }}
                    />

                    {preview && (
                        <img src={preview} className="w-28 h-28 rounded-full mt-4 object-cover"  />
                    )}
                </div>

                <div className="flex gap-4">

                    <button
                        onClick={handleSave}
                        className="btn bg-[#8B6B3F] text-white hover:bg-[#6F542F]"
                    >
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : (
                            "Save Changes"
                        )}
                    </button>

                    <button className="btn btn-outline border-[#8B6B3F] hover:bg-[#8B6B3F] hover:text-white">
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArtistProfilePage;