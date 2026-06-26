"use client";

import Link from "next/link";
import { motion } from "motion/react";

const categories = [

    "Digital Art",

    "Portrait",

    "Landscape",

    "Nature",

    "Modern",

    "Abstract"
];

export default function Categories() {

    return (

        <section className="max-w-7xl mx-auto py-24">

            <h2 className="text-5xl font-black uppercase">

                Art Categories

            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14">

                {categories.map((category,i)=>(

                    <motion.div

                        key={category}

                        whileHover={{

                            y:-8,

                            scale:1.03

                        }}

                        initial={{

                            opacity:0,

                            y:30

                        }}

                        whileInView={{

                            opacity:1,

                            y:0

                        }}

                        transition={{

                            delay:i*.08

                        }}

                    >

                        <Link

                            href={`/artworks?category=${encodeURIComponent(category)}`}

                            className="h-40 border-2 border-[#8B6B3F] flex justify-center items-center text-center text-xl font-black uppercase hover:bg-[#8B6B3F] hover:text-white transition"

                        >

                            {category}

                        </Link>

                    </motion.div>

                ))}

            </div>

        </section>

    );

}