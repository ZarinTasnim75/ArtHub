"use client";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

const salesData = [
    { month: "Jan", sales: 12 },
    { month: "Feb", sales: 19 },
    { month: "Mar", sales: 26 },
    { month: "Apr", sales: 31 },
    { month: "May", sales: 42 },
    { month: "Jun", sales: 58 },
];

const categoryData = [
    { name: "Landscape", value: 24 },
    { name: "Abstract", value: 18 },
    { name: "Portrait", value: 15 },
    { name: "Modern", value: 11 },
    { name: "Nature", value: 22 },
];

const COLORS = [
    "#8B6B3F",
    "#C29D5F",
    "#D8B77B",
    "#E8D4AE",
    "#6B4F2A",
];

const AdminCharts = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

            {/* Sales Chart */}
            <div className="bg-white p-6 border border-gray-200 shadow-md hover:shadow-xl transition">

                <h2 className="text-2xl font-black tracking-wider uppercase mb-6">
                    Sales Overview
                </h2>

                <div className="h-[350px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />

                            <XAxis
                                dataKey="month"
                                tick={{ fontWeight: 700 }}
                            />

                            <YAxis
                                tick={{ fontWeight: 700 }}
                            />

                            <Tooltip />

                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#8B6B3F"
                                strokeWidth={4}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                </div>

            </div>

            {/* Category Pie Chart */}
            <div className="bg-white p-6 border border-gray-200 shadow-md hover:shadow-xl transition">

                <h2 className="text-2xl font-black tracking-wider uppercase mb-6">
                    Artwork Categories
                </h2>

                <div className="h-[350px]">

                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>

                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="name"
                                outerRadius={120}
                                label={({ name }) => name}
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />
                            <Legend />

                        </PieChart>
                    </ResponsiveContainer>

                </div>

            </div>

        </div>
    );
};

export default AdminCharts;