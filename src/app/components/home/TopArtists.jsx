"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function TopArtists({ artists }) {

    return (

        <section className="bg-neutral-100 py-24">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-5xl font-black uppercase">

                    Top Artists

                </h2>

                <div className="grid md:grid-cols-3 gap-10 mt-14">

                    {artists.map((artist, i)=>(

                        <motion.div

                            key={artist._id}

                            initial={{
                                opacity:0,
                                scale:.9
                            }}

                            whileInView={{
                                opacity:1,
                                scale:1
                            }}

                            transition={{
                                delay:i*.2
                            }}

                            viewport={{
                                once:true
                            }}

                            className="bg-white p-10 text-center shadow"

                        >

                            <Image

                                src={artist.avatar}

                                alt={artist.artistName}

                                width={130}

                                height={130}

                                className="rounded-full mx-auto"

                                unoptimized

                            />

                            <h3 className="font-black text-2xl mt-6">

                                {artist.artistName}

                            </h3>

                            <p className="text-[#8B6B3F] mt-2">

                                {artist.totalSales} Sales

                            </p>

                        </motion.div>

                    ))}

                </div>

            </div>

        </section>

    );

}