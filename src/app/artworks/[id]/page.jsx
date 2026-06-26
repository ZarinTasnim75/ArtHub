import Image from "next/image";

export default async function ArtworkDetails({ params }) {

    const { id } = await params;

    const res = await fetch(
        `http://localhost:5000/artworks/${id}`,
        {
            cache: "no-store",
        }
    );

    const artwork = await res.json();

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid lg:grid-cols-2 gap-10">

                <div className="relative h-[600px]">
                    <Image
                        src={artwork.image}
                        alt={artwork.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div>

                    <h1 className="text-5xl font-black uppercase">
                        {artwork.title}
                    </h1>

                    <p className="mt-4 text-lg font-bold text-neutral-500">
                        Artist: {artwork.artistName}
                    </p>

                    <p className="mt-6 text-[#8B6B3F] text-3xl font-black">
                        ${artwork.price}
                    </p>

                    <p className="mt-8 leading-relaxed">
                        {artwork.description}
                    </p>

                    <button className="btn bg-[#8B6B3F] text-white mt-8">
                        Purchase Artwork
                    </button>

                </div>

            </div>

        </div>
    );
}