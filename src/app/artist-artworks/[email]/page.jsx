import Image from "next/image";
import Link from "next/link";

export default async function ArtistArtworksPage({ params }) {
  const { email } = await params;

  const decodedEmail = decodeURIComponent(email);

  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/artist-artworks/${decodedEmail}`;

  console.log("API:", apiUrl);

  const res = await fetch(apiUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch artworks");
  }

  const artworks = await res.json();

  console.log("Artworks:", artworks);

  const artistName =
    artworks.length > 0 ? artworks[0].artistName : "Unknown Artist";

  return (
    <main className="min-h-screen bg-base-100">
      <section className="bg-[#8B6B3F] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-black uppercase">
           Artist: {artistName}
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Explore artworks created by this artist.
          </p>

          <div className="mt-6 badge badge-outline badge-lg text-white border-white">
            {artworks.length} Artwork{artworks.length !== 1 && "s"}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        {artworks.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold">No artworks found</h2>

            <p className="text-gray-500 mt-3">
              This artist hasn't uploaded any artworks yet.
            </p>

            <Link
              href="/artworks"
              className="btn bg-[#8B6B3F] text-white mt-8"
            >
              Browse All Artworks
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork) => (
              <div
                key={artwork._id}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition"
              >
                <figure className="relative h-72">
                  <Image
                    src={artwork.image}
                    alt={artwork.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{artwork.title}</h2>

                  <p className="text-gray-500">
                    {artwork.category}
                  </p>

                  <p className="text-[#8B6B3F] text-xl font-bold">
                    ${artwork.price}
                  </p>

                  <div className="card-actions justify-end">
                    <Link
                      href={`/artworks/${artwork._id}`}
                      className="btn bg-[#8B6B3F] text-white"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}