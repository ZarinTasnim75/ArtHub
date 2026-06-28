"use client";

import Image from "next/image";
import { motion } from "motion/react";
import default_avatar from "../../../../public/assets/images.jpg";

export default function TopArtists({ artists }) {
    return (
        <section className="bg-neutral-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.08em] md:tracking-[0.15em]">
                    Top Artists
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-14">

                    {artists.map((artist, i) => (
                        <motion.div
                            key={artist._id}
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            transition={{
                                delay: i * 0.2,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="bg-white p-6 md:p-10 text-center shadow rounded-xl"
                        >
                            <Image
                                src={artist.avatar || default_avatar}
                                alt={artist.artistName}
                                width={130}
                                height={130}
                                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto object-cover"
                                unoptimized
                            />

                            <h3 className="font-black text-xl md:text-2xl mt-5 md:mt-6">
                                {artist.artistName}
                            </h3>

                            <p className="text-[#8B6B3F] mt-2 font-semibold">
                                {artist.totalSales} Sales
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}