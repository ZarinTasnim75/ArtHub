"use client";

import { useEffect, useState } from "react";
import ArtworkCard from "../components/ArtworkCard";
import ArtworkSkeleton from "../components/ArtworkSkeleton";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function ArtworksPage() {

    const [artworks, setArtworks] = useState([]);
    const [filteredArtworks, setFilteredArtworks] = useState([]);
    const [sort, setSort] = useState("");
    const [priceFilter, setPriceFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const [category, setCategory] = useState(searchParams.get("category") || "");
    const router = useRouter();

    useEffect(() => {

        setLoading(true);

        fetch(`http://localhost:5000/artworks${category ? `?category=${encodeURIComponent(category)}` : ""}`)
            .then(res => res.json())
            .then(data => {
                setArtworks(data);
                setLoading(false);
            });

    }, [category]);

    useEffect(() => {

        let data = [...artworks];

        // Search
        data = data.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );

        // Price Filter
        if (priceFilter === "low") {
            data = data.filter(item => item.price < 500);
        }

        if (priceFilter === "medium") {
            data = data.filter(item => item.price >= 500 && item.price <= 1000);
        }

        if (priceFilter === "high") {
            data = data.filter(item => item.price > 1000);
        }

        // Sorting
        if (sort === "low-high") {
            data.sort((a, b) => a.price - b.price);
        }

        if (sort === "high-low") {
            data.sort((a, b) => b.price - a.price);
        }

        if (sort === "az") {
            data.sort((a, b) => a.title.localeCompare(b.title));
        }

        if (sort === "za") {
            data.sort((a, b) => b.title.localeCompare(a.title));
        }

        setFilteredArtworks(data);

    }, [search, artworks, sort, priceFilter, category]);

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            <div className="mb-10">

                <h1 className="text-5xl font-black uppercase tracking-[0.15em]"> Artwork Collections
                </h1>

                <p className="mt-3 text-neutral-500 font-bold"> Discover artwork from talented artists. </p>

            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-10">

                <input type="text"
                    placeholder="Search artwork..."
                    className="input input-bordered w-full"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select className="select select-bordered" value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} >
                    <option value="all">All Prices</option>
                    <option value="low">Below $500</option>
                    <option value="medium">$500 - $1000</option>
                    <option value="high">Above $1000</option>
                </select>

                <select className="select select-bordered" value={sort} onChange={(e) => setSort(e.target.value)} >
                    <option value="">Sort</option>
                    <option value="low-high">Price: Low → High</option>
                    <option value="high-low">Price: High → Low</option>
                    <option value="az">Title A-Z</option>
                    <option value="za">Title Z-A</option>
                </select>

                <select
                    className="select select-bordered"
                    value={category}
                    onChange={(e) => {
                        const value = e.target.value;
                        setCategory(value);
                        router.replace(
                            value
                                ? `/artworks?category=${encodeURIComponent(value)}`
                                : "/artworks"
                        );
                    }}
                >
                    <option value="">All Categories</option>
                    <option value="Landscape">Landscape</option>
                    <option value="Portrait">Portrait</option>
                    <option value="Abstract">Abstract</option>
                    <option value="Modern">Modern</option>
                    <option value="Nature">Nature</option>
                    <option value="Digital Art">Digital Art</option>
                </select>

            </div>

            {loading ? (

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                    {[...Array(8)].map((_, i) => (
                        <ArtworkSkeleton key={i} />
                    ))}

                </div>

            ) : filteredArtworks.length === 0 ? (

                <div className="text-center py-20">

                    <h2 className="text-2xl font-black uppercase">
                        No Artwork Found
                    </h2>

                    <p className="mt-3 text-neutral-500">
                        Try changing your search.
                    </p>

                </div>

            ) : (

                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                    {filteredArtworks.map(artwork => (
                        <ArtworkCard
                            key={artwork._id}
                            artwork={artwork}
                        />
                    ))}

                </div>

            )}

        </div>
    );
}