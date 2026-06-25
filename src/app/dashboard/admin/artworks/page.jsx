import React from 'react';

const ArtworksPage = () => {

       const artworks = [
        {
            _id: 1,
            title: "Golden Horizon",
            artist: "Sarah Artist",
            price: "$150",
        },
        {
            _id: 2,
            title: "Silent Forest",
            artist: "John Smith",
            price: "$220",
        },
    ];
    
    return (
        <div>
            <div className="mt-14">

                <h2 className="text-2xl font-bold uppercase tracking-wider mb-6">
                    Manage All Artworks
                </h2>

                <div className="overflow-x-auto border">

                    <table className="table">

                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {artworks.map((artwork) => (
                                <tr key={artwork._id}>
                                    <td>{artwork.title}</td>
                                    <td>{artwork.artist}</td>
                                    <td>{artwork.price}</td>

                                    <td>
                                        <button className="btn btn-error btn-sm text-white">
                                            Delete
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

export default ArtworksPage;