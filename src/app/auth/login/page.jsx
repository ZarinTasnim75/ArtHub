"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import toast from "react-hot-toast";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";

const LoginPage = () => {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      toast.error("Enter a valid email");
      return;
    }

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain uppercase, lowercase and number"
      );
      return;
    }

    setLoading(true);

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      });
      console.log(result);
      if (result.error) {
        toast.error(result.error.message);
        return;
      }

      toast.success("Login successful");
      router.refresh();
      console.log(result);

      const role = result.data?.user?.role;

      if (role === "admin") {
        router.push("/dashboard/admin");
      } else if (role === "artist") {
        router.push("/dashboard/artist");
      } else {
        router.push("/dashboard/user");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard/user",
    });
  };


  return (
    <div className="fixed inset-0 z-50">

      <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

      <div className="absolute right-0 top-0 h-screen w-full md:w-[500px] bg-white shadow-2xl overflow-y-auto">

        <div className="p-8 md:p-12">

          <div className="flex items-center justify-between mb-10">
            <h1 className="text-4xl font-black tracking-[0.15em] uppercase text-gray-800">
              ARTHUB
            </h1>

            <Link href="/" className="text-gray-500 hover:text-black transition" > <FaTimes size={22} /> </Link>
          </div>

          <h2 className="text-3xl font-bold tracking-[0.12em] uppercase text-gray-800"> Welcome Back </h2>

          <p className="mt-3 text-gray-500 font-bold">  Sign in to explore original artworks and collections. </p>

          <form onSubmit={handleLogin} className="mt-10 space-y-6">

            <div>
              <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border border-gray-300 px-4 py-3"
              />
            </div>

            <div className="relative">
              <label className="block mb-2 uppercase font-bold text-sm tracking-wider text-gray-600">
                Password
              </label>

              <input
                type={showPassword ? "text" : "password"} value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border border-gray-300 font-bold px-4 py-3 pr-12 outline-none focus:border-[#8B6B3F]"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-[#8B6B3F] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full py-3 border border-[#8B6B3F] uppercase font-extrabold tracking-[0.2em] hover:bg-[#8B6B3F] hover:text-white transition"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Logging In...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 border-t" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="flex-1 border-t" />
          </div>

          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 hover:bg-gray-50 transition"
            onClick={handleGoogleSignin} >
            <FcGoogle size={22} />
            Continue with Google
          </button>

          <p className="mt-8 text-center font-black text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="text-[#8B6B3F] hover:underline font-extrabold"
            >
              Register
            </Link>
          </p>

          <div className="mt-12 border-t border-[#d8b77b]" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;