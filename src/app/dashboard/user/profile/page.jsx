"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "../../../lib/auth-client";

export default function ProfilePage() {

    const { data: session } = authClient.useSession();

    const [name, setName] = useState(
        session?.user?.name || ""
    );

    const [loading, setLoading] = useState(false);

    const handleUpdate = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/profile`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: session.user.email,
                        name,
                    }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {

                toast.success("Profile updated successfully");

            } else {

                toast.error("No changes made");

            }

        } catch {

            toast.error("Update failed");

        }

        setLoading(false);

    };

    return (

        <div className="max-w-3xl">

            <h1 className="text-4xl font-black uppercase tracking-[0.15em]">
                Profile Settings
            </h1>

            <p className="mt-3 text-gray-500">
                Manage your account information.
            </p>

            <form
                onSubmit={handleUpdate}
                className="border mt-10 p-8 space-y-6"
            >

                <div>

                    <label className="font-bold">
                        Full Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        className="input input-bordered w-full mt-2"
                    />

                </div>

                <div>

                    <label className="font-bold">
                        Email Address
                    </label>

                    <input
                        type="email"
                        value={session?.user?.email || ""}
                        readOnly
                        className="input input-bordered w-full mt-2 bg-gray-100"
                    />

                </div>

                <div>

                    <label className="font-bold">
                        Change Password
                    </label>

                    <input
                        type="password"
                        placeholder="Leave empty if unchanged"
                        className="input input-bordered w-full mt-2"
                    />

                </div>

                <button
                    disabled={loading}
                    className="btn bg-[#8B6B3F] text-white"
                >

                    {loading ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        "Save Changes"
                    )}

                </button>

            </form>

        </div>
    );
}