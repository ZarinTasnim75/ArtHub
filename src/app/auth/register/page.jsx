"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";

const RegisterPage = () => {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("user");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [artistImage, setArtistImage] = useState(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!fullName.trim()) {
            return toast.error("Full name is required");
        }

        if (!emailRegex.test(email)) {
            return toast.error("Please enter a valid email");
        }

        if (!passwordRegex.test(password)) {
            return toast.error(
                "Password must contain uppercase, lowercase and number"
            );
        }

        if (password !== confirmPassword) {
            return toast.error("Passwords do not match");
        }

        try {
            setLoading(true);

            let imageUrl = "";

            if (role === "artist") {
                if (!artistImage) {
                    toast.error("Please choose an artist avatar");
                    return;
                }

                const formData = new FormData();
                formData.append("image", artistImage);

                const upload = await fetch(
                    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                if (!upload.ok) {
                    toast.error("Image upload failed");
                    return;
                }

                const imageData = await upload.json();
                imageUrl = imageData.data.display_url;
            }

            const result = await authClient.signUp.email({
                name: fullName,
                email,
                password,
                role,
                artistImage: imageUrl,
                plan: "Free",
                maxPurchases: 3,
            });

            if (result.error) {
                toast.error(result.error.message);
                return;
            }
            toast.success("Registration successful");

                        // get your custom JWT for the Express backend
const jwtRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jwt`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
});
const { token } = await jwtRes.json();

localStorage.setItem("access-token", token);

            if (role === "artist") {
                router.push("/dashboard/artist");
            } else {
                router.push("/");
            }
        } catch (error) {
            console.error("Registration error:", error);
            toast.error("Registration failed");
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (

        <div className="fixed inset-0 z-50">

            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
            <div className="absolute right-0 top-0 h-screen w-full md:w-[500px] bg-white shadow-2xl overflow-y-auto">
                <div className="w-full max-w-xl bg-white shadow-2xl">

                    <div className="p-8 md:p-12">

                        <div className="flex items-center justify-between mb-8">

                            <h1 className="text-4xl font-black tracking-[0.15em] uppercase text-gray-800">
                                ARTHUB
                            </h1>

                            <Link href="/" className="text-gray-500 hover:text-black transition" >
                                <FaTimes size={22} />
                            </Link>
                        </div>

                        <h2 className="text-3xl font-bold tracking-[0.1em] uppercase text-gray-800">
                            Create Account
                        </h2>

                        <p className="mt-3 text-gray-500 font-black"> Join ARTHUB and discover original artworks. </p>

                        <form onSubmit={handleRegister}
                            className="mt-8 space-y-5" >

                            <div>
                                <label className="block mb-2 uppercase font-extrabold text-sm tracking-wider text-gray-600">
                                    Full Name
                                </label>

                                <input type="text"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8B6B3F]" />
                            </div>

                            <div>
                                <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8B6B3F]"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                                    Role
                                </label>

                                <select
                                    value={role}
                                    onChange={(e) =>
                                        setRole(e.target.value)
                                    }
                                    className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8B6B3F]"
                                >
                                    <option value="user">
                                        User
                                    </option>

                                    <option value="artist">
                                        Artist
                                    </option>
                                </select>
                            </div>

                            {role === "artist" && (
                                <div>
                                    <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                                        Artist Avatar
                                    </label>

                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setArtistImage(e.target.files[0])}
                                        className="w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#8B6B3F]"
                                    />
                                </div>
                            )}


                            <div className="relative">

                                <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                                    Password
                                </label>

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Enter password"
                                    className="w-full border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-[#8B6B3F]"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-[52px]"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>

                            <div className="relative">

                                <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                                    Confirm Password
                                </label>

                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    value={confirmPassword}
                                    onChange={(e) =>
                                        setConfirmPassword(
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirm password"
                                    className="w-full border border-gray-300 px-4 py-3 pr-12 outline-none focus:border-[#8B6B3F]"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-4 top-[52px]"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 border border-[#8B6B3F] uppercase font-extrabold tracking-[0.2em] hover:bg-[#8B6B3F] hover:text-white transition flex justify-center items-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <span className="loading loading-spinner loading-sm"></span>
                                        Registering...
                                    </>
                                ) : (
                                    "Register"
                                )}
                            </button>
                        </form>

                        <div className="flex items-center gap-4 my-8">
                            <div className="flex-1 border-t" />
                            <span className="text-sm text-gray-400">
                                OR
                            </span>
                            <div className="flex-1 border-t" />
                        </div>

                        <button
                            onClick={handleGoogleSignup}
                            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 hover:bg-gray-50 transition"
                        >
                            <FcGoogle size={22} />
                            Continue with Google
                        </button>

                        <p className="mt-8 text-center font-black text-gray-500">
                            Already have an account?{" "}
                            <Link
                                href="/auth/login"
                                className="text-[#8B6B3F] hover:underline font-bold"
                            >
                                Login
                            </Link>
                        </p>

                        <div className="mt-10 border-t border-[#d8b77b]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;