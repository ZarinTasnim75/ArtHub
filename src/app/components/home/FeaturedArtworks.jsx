"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import ArtworkCard from "../ArtworkCard";
import ArtworkSkeleton from "../ArtworkSkeleton";

export default function FeaturedArtworks() {

    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:5000/featured-artworks")
            .then(res => res.json())
            .then(data => {

                setArtworks(data);
                setLoading(false);

            });

    }, []);

    return (

        <section className="max-w-7xl mx-auto py-24">

            <motion.div

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

            >

                <h2 className="text-5xl font-black uppercase">

                    Featured Artworks

                </h2>

                <p className="mt-4 text-neutral-500">

                    Fresh arrivals from talented artists.

                </p>

            </motion.div>

            <div className="grid md:grid-cols-3 xl:grid-cols-3 gap-8 mt-12">

                {loading ?

                    [...Array(6)].map((_, i) =>

                        <ArtworkSkeleton key={i} />

                    )

                    :

                    artworks.map((artwork, i) => (

                        <motion.div

                            key={artwork._id}

                            initial={{
                                opacity: 0,
                                y: 40
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                delay: i * .1
                            }}

                            viewport={{
                                once: true
                            }}

                        >

                            <ArtworkCard artwork={artwork} />

                        </motion.div>

                    ))

                }

            </div>

        </section>

    );

}