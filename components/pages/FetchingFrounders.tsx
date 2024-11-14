'use client'

import { useEffect, useState } from "react"

type Founder = {
  id: string;
  name: string;
  post: string;
  image: string;
}

export const FetchingFounders = () => {
    const [founders, setFounders] = useState<Founder[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFounders = async () => {
            try {
                const response = await fetch('/api/founders');
                if (!response.ok) {
                    throw new Error('Failed to fetch founders');
                }

                const data = await response.json();
                setFounders(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchFounders();
    }, []);

    if (error) {
        return <h1 className="text-red-600 text-center text-2xl font-semibold m-8">{error}</h1>;
    }

    if (founders.length === 0) {
        return <h1 className="text-center text-2xl font-semibold m-8">Loading...</h1>;
    }

    return (
        <div className="container mx-auto px-4">
            {/* Title Section */}
            <div className="text-center py-12">
                <h1 className="text-teal-800 font-extrabold uppercase text-4xl tracking-wide">
                    Meet the Founders
                </h1>
            </div>

            {/* Centered Founders Cards Container */}
            <div className="flex justify-center items-center">
                <div className="inline-flex overflow-x-auto gap-6 pb-8 px-4">
                    {founders.map((founder) => (
                        <div
                            key={founder.id}
                            className="flex-none w-64 relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                        >
                            <div className="aspect-w-3 aspect-h-4 w-full">
                                {founder.image && (
                                    <img
                                        src={founder.image}
                                        alt={founder.name}
                                        className="w-full h-80 object-cover"
                                    />
                                )}
                            </div>
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
                                <h2 className="text-xl font-bold mb-2">{founder.name}</h2>
                                <p className="text-gray-200">{founder.post}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FetchingFounders;