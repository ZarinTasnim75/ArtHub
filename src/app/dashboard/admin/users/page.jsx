import React from 'react';

const UsersPage = () => {
       const users = [
        {
            _id: 1,
            name: "John Doe",
            email: "john@gmail.com",
            role: "user",
        },
        {
            _id: 2,
            name: "Sarah Artist",
            email: "artist@gmail.com",
            role: "artist",
        },
    ];
    return (
        <div>
            <div className="mt-14">

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

                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <span className="badge">
                                            {user.role}
                                        </span>
                                    </td>

                                    <td className="space-x-2">

                                        <button className="btn btn-sm border-[#8B6B3F]">
                                            User
                                        </button>

                                        <button className="btn btn-sm border-[#8B6B3F]">
                                            Artist
                                        </button>

                                        <button className="btn btn-sm border-[#8B6B3F]">
                                            Admin
                                        </button>

                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
};

export default UsersPage;