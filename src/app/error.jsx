"use client";

export default function Error({

    error,
    reset,

}) {

    return (

        <div className="min-h-screen flex items-center justify-center">

            <div className="text-center">

                <h1 className="text-5xl font-black">
                    Something went wrong
                </h1>

                <p className="mt-4 text-neutral-500">
                    An unexpected error occurred.
                </p>

                <button
                    onClick={() => reset()}
                    className="btn bg-[#8B6B3F] text-white mt-8"
                >
                    Reload
                </button>

            </div>

        </div>

    );

}