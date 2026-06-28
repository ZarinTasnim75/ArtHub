import ArtworkDetailsClient from "./ArtworkDetailsClient";

export default async function ArtworkDetails({ params }) {
    const { id } = await params;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/artworks/${id}`,
        { cache: "no-store" }
    );

    if (!res.ok) {
    return (
        <div className="text-center py-20">

            <h1 className="text-4xl font-black">
                Artwork Not Found
            </h1>

        </div>
    );
}

    const artwork = await res.json();

    return <ArtworkDetailsClient artwork={artwork} />;
}