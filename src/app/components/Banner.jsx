"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const slides = [
    {
        id: 1,
        image: "/assets/hero1.jpg",
        title: "DISCOVER & BUY",
        subtitle: "Original Art",
    },
    {
        id: 2,
        image: "/assets/hero2.jpg",
        title: "EXPLORE",
        subtitle: "Creative Collections",
    },
    {
        id: 3,
        image: "/assets/hero3.jpg",
        title: "SUPPORT",
        subtitle: "Independent Artists",
    },
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-10 mt-8">
            <div className="relative overflow-hidden h-[380px] md:h-[450px] lg:h-[520px]">

                {slides.map((slide, index) => (
                    <div key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-700 ${current === index ? "opacity-100" : "opacity-0 pointer-events-none" }`} >
                        <Image src={slide.image} alt={slide.subtitle} fill priority={index === 0} className="object-cover" />

                        <div className="absolute inset-0 bg-black/25" />

                        <div className="absolute inset-y-0 left-0 flex items-center z-10">
                            <div className="px-6 lg:px-12 max-w-full lg:max-w-[55%] text-white">

                                <p className="italic text-base md:text-lg mb-3">
                                    Discover & Buy Original Art
                                </p>

                                <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl ml-4 lg:ml-6 font-light tracking-[0.12em] uppercase leading-tight">
                                    {slide.title}
                                </h1>

                                <h2 className="text-2xl md:text-4xl lg:text-5xl mt-3 ml-4 lg:ml-6 font-light">
                                    {slide.subtitle}
                                </h2>

                                <Link href="/artworks" className="relative inline-block whitespace-nowrap mt-8 lg:mt-10 px-12 lg:px-16 py-4 text-base lg:text-lg font-semibold tracking-wide border border-[#d8b77b] hover:bg-[#d8b77b]/20 transition">
                                    <span className="absolute top-0 right-0 w-8 h-[2px] bg-white"></span>
                                    <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-white"></span>
                                    Browse Artworks
                                </Link>
                            </div>
                        </div>

                        <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 z-10">
                            <div className="bg-white w-[280px] xl:w-[320px] p-8 shadow-xl">

                                <div className="flex items-start gap-4">
                                    <FaClock className="text-[#8B6B3F] text-2xl mt-1" />

                                    <div>
                                        <h3 className="uppercase tracking-[0.12em] text-gray-700 font-semibold">    Opening Hours</h3>

                                        <p className="text-gray-600 mt-2 text-sm">    Mon - Fri: 09am - 07pm</p>

                                        <p className="text-gray-600 text-sm">    Sat - Sun: 10am - 05pm</p>
                                    </div>
                                </div>

                                <div className="border-t my-6"></div>

                                <div className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-[#8B6B3F] text-2xl mt-1" />

                                    <div>
                                        <h3 className="uppercase tracking-[0.12em] text-gray-700 font-semibold">    Location</h3>

                                        <p className="text-gray-600 mt-2 text-sm">    Savar, Dhaka</p>

                                        <p className="text-gray-600 text-sm">    Bangladesh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <button onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 hover:bg-black/40 transition" >
                    <FaChevronLeft />
                </button>

                <button onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm text-white p-3 hover:bg-black/40 transition">
                    <FaChevronRight />
                </button>
            </div>

            <div className="lg:hidden mt-6 bg-white shadow-md p-5 flex flex-col gap-5">

                <div className="flex items-center gap-4">
                    <FaClock className="text-[#8B6B3F] text-xl" />

                    <div>
                        <h3 className="font-semibold uppercase text-sm">  Opening Hours</h3>

                        <p className="text-gray-600 text-sm">    Mon - Fri: 09am - 07pm</p>

                        <p className="text-gray-600 text-sm">    Sat - Sun: 10am - 05pm</p>
                    </div>
                </div>

                <div className="border-t"></div>

                <div className="flex items-center gap-4">
                    <FaMapMarkerAlt className="text-[#8B6B3F] text-xl" />

                    <div>
                        <h3 className="font-semibold uppercase text-sm">    Location</h3>

                        <p className="text-gray-600 text-sm">    Savar, Dhaka, Bangladesh</p>
                    </div>
                </div>

            </div>

            <div className="flex justify-center gap-4 mt-6">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition ${current === index
                            ? "bg-[#8B6B3F]"
                            : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Banner;