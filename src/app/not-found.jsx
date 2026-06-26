import Link from "next/link";

export default function NotFound() {

    return (

        <div className="min-h-screen flex items-center justify-center px-6">

            <div className="text-center">

                <h1 className="text-9xl font-black text-[#8B6B3F]">
                    404
                </h1>

                <h2 className="text-5xl font-black mt-6 uppercase">
                    Page Not Found
                </h2>

                <p className="text-neutral-500 mt-5 max-w-lg mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="btn bg-[#8B6B3F] text-white mt-10"
                >
                    Back to Home
                </Link>

            </div>

        </div>

    );

}