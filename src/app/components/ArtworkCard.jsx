"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ArtworkCard({ artwork }) {
    console.log(artwork.image)
    return (
        <Link href={`/artworks/${artwork._id}`}>
            <div className="group cursor-pointer">
                <div className="relative h-[500px] overflow-hidden">
                    <Image src={artwork.image}
                        alt={artwork.title} fill unoptimized
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="bg-white w-[90%] -mt-24 relative z-10 p-7 ">

                    <p className="italic text-[#B28B55]">
                        Collection
                    </p>

                    <h2 className="mt-3 text-lg uppercase tracking-[0.18em] font-light">
                        {artwork.title}
                    </h2>

                    <p className="mt-5 text-neutral-500">
                        By <span className="font-semibold">
                            {artwork.artistName}
                        </span>
                    </p>

                    <p className="mt-2 text-[#8B6B3F] font-bold text-xl">
                        ${artwork.price}
                    </p>

                    <div className="flex items-center gap-4 mt-8">

                        <div className="w-12 h-[1px] bg-[#B28B55]" />

                        <span className="font-semibold tracking-wider">
                            View more
                        </span>

                        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition" />

                    </div>

                </div>

            </div>
        </Link>
    );
}