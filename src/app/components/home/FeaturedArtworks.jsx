"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ArtworkCard from "../ArtworkCard";
import ArtworkSkeleton from "../ArtworkSkeleton";

export default function FeaturedArtworks() {

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-artworks`)
            .then(res => res.json())
            .then(data => {
                setArtworks(data);
                setLoading(false);

            });

    }, []);

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.08em] md:tracking-[0.15em]">
                    Featured Artworks
                </h2>

                <p className="mt-3 text-sm md:text-base text-neutral-500">
                    Fresh arrivals from talented artists.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

                {loading
                    ? [...Array(6)].map((_, i) => (
                        <ArtworkSkeleton key={i} />
                    ))
                    : artworks.map((artwork, i) => (
                        <motion.div
                            key={artwork._id}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                delay: i * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                        >
                            <ArtworkCard artwork={artwork} />
                        </motion.div>
                    ))}
            </div>
        </section>
    );
}