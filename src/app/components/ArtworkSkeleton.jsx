export default function ArtworkSkeleton() {
    return (
        <div className="border border-neutral-200 animate-pulse">
            <div className="h-64 bg-neutral-200"></div>

            <div className="p-4 space-y-3">
                <div className="h-5 bg-neutral-200"></div>
                <div className="h-4 bg-neutral-200 w-2/3"></div>
                <div className="h-4 bg-neutral-200 w-1/3"></div>
            </div>
        </div>
    );
}