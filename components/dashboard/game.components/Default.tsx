'use client'
import React, { useEffect, useState } from 'react'
import { Game } from '../../common/TypeGame';
import Image from 'next/image';
import { Deleting } from './Fonctionality';

function Default() {

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const fetchGames = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/games');
                if (!response.ok) throw new Error('Failed to fetch games');
                const data = await response.json();
                setGames(data);
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, []);

    const HandleDelete = async (id: string)=>{
        await Deleting(id)
    }

    return loading ? (
        <div className="text-center">Loading...</div>
    ) : (
        <div className='w-full flex flex-col justify-end'>
        

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-8 p-8">
          
            {games.map((item) => (
                <div key={item.id} className="m-4">
                    <h1>{item.title}</h1>
                    <button
                        className="w-full h-full relative"
                        onClick={() => console.log(`Game with ID ${item.id} clicked`)}
                    >
                        <Image
                            src={item.images[0]?.url || '/fallback.jpg'}
                            alt={item.title || 'Game Image'}
                            fill
                            className="object-cover"
                        />
                    </button>
                    <div className="w-full flex space-x-4">
                        <button className="w-auto bg-green-700 rounded-md hover:text-white hover:bg-green-900 p-2">
                            Modify
                        </button>
                        <button 
                        className="w-auto bg-red-700 rounded-md hover:text-white hover:bg-red-900 p-2"
                        onClick={()=>HandleDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
  
}

export default Default