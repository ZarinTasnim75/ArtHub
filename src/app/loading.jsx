export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">

            <div className="flex flex-col items-center gap-6">

                <span className="loading loading-spinner loading-lg text-[#8B6B3F]"></span>

                <h1 className="text-4xl font-black tracking-[0.2em] text-[#8B6B3F]">
                    ARTHUB
                </h1>

                <p className="uppercase tracking-widest text-neutral-500">
                    Loading...
                </p>

            </div>

        </div>
    );
}