"use client";

import Link from "next/link";
import { motion } from "motion/react";

const categories = [
    "Digital Art",
    "Portrait",
    "Landscape",
    "Nature",
    "Modern",
    "Abstract",
];

export default function Categories() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-[0.08em] md:tracking-[0.15em]">
                Art Categories
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mt-10 md:mt-14">

                {categories.map((category, i) => (
                    <motion.div
                        key={category}
                        whileHover={{
                            y: -8,
                            scale: 1.03,
                        }}
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: i * 0.08,
                        }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href={`/artworks?category=${encodeURIComponent(category)}`}
                            className="h-28 sm:h-32 md:h-36 flex items-center justify-center rounded-xl border-2 border-[#8B6B3F] text-center 
                            text-sm sm:text-lg md:text-xl font-black uppercase hover:bg-[#8B6B3F] hover:text-white transition-all duration-300 px-3" >
                            {category}
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}