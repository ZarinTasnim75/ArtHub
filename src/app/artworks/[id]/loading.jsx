export default function Loading() {
    return (
        <div className="max-w-6xl mx-auto px-6 py-10">

            <div className="grid lg:grid-cols-2 gap-10">

                <div className="skeleton h-[600px] w-full rounded-none"></div>

                <div className="space-y-6">

                    <div className="skeleton h-12 w-3/4"></div>

                    <div className="skeleton h-6 w-1/2"></div>

                    <div className="skeleton h-10 w-32"></div>

                    <div className="skeleton h-6 w-40"></div>

                    <div className="space-y-3">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                        <div className="skeleton h-4 w-2/3"></div>
                    </div>

                    <div className="skeleton h-5 w-48"></div>

                    <div className="skeleton h-12 w-48"></div>
                </div>

            </div>

            <div className="flex gap-4 mt-10">
                <div className="skeleton h-12 w-36"></div>
                <div className="skeleton h-12 w-36"></div>
            </div>

            <div className="mt-16 space-y-5">

                <div className="skeleton h-8 w-40"></div>

                <div className="skeleton h-32 w-full"></div>

                <div className="skeleton h-12 w-40"></div>

            </div>

        </div>
    );
}