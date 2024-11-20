'use client'
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Star, Monitor, DollarSign } from 'lucide-react';
import Image from "next/image";

interface Game {
    id: string;
    title: string;
    description: string;
    genre: string;
    platform: string[];
    price: number;
    rating: number;
    releaseDate: string;
    images: { url: string }[];
}

export default function Game() {
    const params = useParams();
    const id = params.id; 
    const [game, setGame] = useState<Game | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/games?id=${id}`);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch game data');
                }
                
                const data = await response.json();
                setGame(data);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-pulse text-2xl text-gray-600">Loading Game Details...</div>
        </div>
    );

    if (error) return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
            <div className="text-red-600 text-2xl">{error}</div>
        </div>
    );

    if (!game) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-gray-600 text-2xl">No game found</div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
                {/* Game Image */}
                <div className="h-96 w-full relative">
                    {game.images && game.images.length > 0 && (
                        <Image 
                            src={game.images[0].url} 
                            alt={game.title} 
                            fill
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white">{game.title}</h1>
                </div>

                {/* Game Details */}
                <div className="p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Description */}
                        <div>
                            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About the Game</h2>
                            <p className="text-gray-600">{game.description}</p>
                        </div>

                        {/* Details Grid */}
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Star className="text-yellow-500" />
                                <span className="text-lg">Rating: {game.rating}/5</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <DollarSign className="text-green-500" />
                                <span className="text-lg">Price: ${game.price}</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-2">
                                    {game.platform.map((platform) => (
                                        platform === 'PC' &&
                                            <Monitor key={platform} className="text-blue-500" />                                     ))}
                                </div>
                                <span className="text-lg">Platforms: {game.platform.join(', ')}</span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-lg">
                                    Release Date: {new Date(game.releaseDate).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Genre Tag */}
                    <div className="mt-6">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
                            {game.genre}
                        </span>
                        
                    </div>
                    <div className="w-full flex justify-center ">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
  <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
  <span>Download Now</span>
</button>
</div>
                </div>
            </div>
            
        </div>
    );
}
