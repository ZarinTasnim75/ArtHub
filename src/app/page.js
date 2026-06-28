import Banner from "./components/Banner";
import FeaturedArtworks from "../../src/app/components/home/FeaturedArtworks";
import TopArtists from "../../src/app/components/home/TopArtists";
import Categories from "../../src/app/components/home/Categories";

export default async function Home() {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/top-artists`,
        {
            cache: "no-store",
        }
    );

    const artists = await res.json();

    return (
        <div>

            <Banner />

            <FeaturedArtworks />

            <TopArtists artists={artists} />

            <Categories />

        </div>
    );
}