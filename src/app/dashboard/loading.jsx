export default function DashboardLoading() {
    return (
        <div className="space-y-8">

            <div className="skeleton h-12 w-80"></div>

            <div className="grid md:grid-cols-3 gap-6">

                {[1,2,3].map(i=>(
                    <div
                        key={i}
                        className="skeleton h-40 w-full"
                    />
                ))}

            </div>

        </div>
    );
}