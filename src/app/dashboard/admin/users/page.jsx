"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/all`)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to load users:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleRoleChange = async (userId, role) => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/users/role/${userId}`,
                {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ role }),
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                toast.success(`Role updated to ${role}`);
                setUsers((prev) =>
                    prev.map((u) => (u._id === userId ? { ...u, role } : u))
                );
            } else {
                toast.error("Role unchanged or user not found");
            }
        } catch (err) {
            toast.error("Failed to update role");
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div>
            <div className="mt-14 ml-3 lg:ml-6">
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Manage Users
                </h2>

                <div className="overflow-x-auto border">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center py-12">
                                        No users found.
                                    </td>
                                </tr>
                            ) : (
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className="badge">{user.role}</span>
                                        </td>
                                        <td className="space-x-2">
                                            <button
                                                disabled={user.role === "user"}
                                                onClick={() => handleRoleChange(user._id, "user")}
                                                className="btn btn-sm border-[#8B6B3F] disabled:opacity-80"
                                            >
                                                User
                                            </button>
                                            <button
                                                disabled={user.role === "artist"}
                                                onClick={() => handleRoleChange(user._id, "artist")}
                                                className="btn btn-sm border-[#8B6B3F] disabled:opacity-80"
                                            >
                                                Artist
                                            </button>
                                            <button
                                                disabled={user.role === "admin"}
                                                onClick={() => handleRoleChange(user._id, "admin")}
                                                className="btn btn-sm border-[#8B6B3F] disabled:opacity-80"
                                            >
                                                Admin
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;