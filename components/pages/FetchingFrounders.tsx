'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import Skeleton from "react-loading-skeleton";

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
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 md:p-6 lg:p-8">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="relative border border-gray-300 rounded-lg overflow-hidden shadow">
                        <Skeleton height={350} />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
            {/* Title Section */}
            <div className="text-center py-8 md:py-12">
                <h1 className="text-gray-200 font-extrabold uppercase text-2xl md:text-4xl tracking-wide">
                    Meet the Founders
                </h1>
            </div>

            {/* Responsive Founders Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-16">
                {founders.map((founder) => (
                    <div
                        key={founder.id}
                        className="relative border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        <div className="relative w-full h-64">
                            {founder.image && (
                                <Image
                                    src={founder.image}
                                    alt={founder.name}
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 text-white">
                            <h2 className="text-lg md:text-xl font-bold mb-2">{founder.name}</h2>
                            <p className="text-sm md:text-base text-gray-200">{founder.post}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
