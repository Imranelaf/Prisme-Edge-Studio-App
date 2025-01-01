'use client'

import { useEffect, useState } from 'react'
import type { Game } from './TypeGame'
import Link from 'next/link'
import Image from 'next/image'
import Skeleton from 'react-loading-skeleton'

export const Card = ({ showAll = true }) => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games', { next: { revalidate: 3600 } });
        if (!response.ok) throw new Error('Failed to fetch games.');
        
        const data = await response.json();
        setGames(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching games:', error.message);
          setError(error.message);
        } else {
          console.error('Unexpected error:', error);
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };
  
    fetchGames();
  }, []);
  

  if (error) return <p className="text-red-500 text-center p-4">{error}</p>

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="relative border border-gray-300 rounded-lg overflow-hidden shadow h-[250px] sm:h-[300px] lg:h-[350px]">
            <Skeleton height="100%" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="container mx-auto">
      <div className='px-4 py-6 sm:py-8 lg:py-12 text-center'>
        <h1 className="text-teal-800 font-extrabold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-wide">
          Our Games
        </h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
        {games.map((game) => (
          <div 
            key={game.id} 
            className="relative border border-gray-300 rounded-lg overflow-hidden shadow 
                     h-[250px] sm:h-[300px] lg:h-[350px] 
                     transition-all duration-200 hover:scale-[1.02] hover:shadow-xl"
          >
            <Link href={`/games/${game.id}`} className="block h-full">
              <div className="w-full h-full relative">
                <Image
                  src={game.images[0]?.url || 'https://cdn.pixabay.com/photo/2016/12/14/23/08/page-not-found-1907792_640.jpg'}
                  alt={game.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 
                         (max-width: 1024px) 50vw, 
                         (max-width: 1280px) 33vw, 
                         25vw"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center 
                          bg-black/50 opacity-0 hover:opacity-100 
                          transition-opacity duration-200 p-4">
                <h2 className="text-xl sm:text-2xl text-white font-bold mb-2">{game.title}</h2>
                {game.genre && 
                  <h4 className="text-sm sm:text-base text-gray-200">
                    Genre: {game.genre}
                  </h4>
                }
              </div>
            </Link>
          </div>
        ))}
        
        {showAll && (
          <div className="relative border border-gray-300 rounded-lg overflow-hidden 
                         shadow h-[250px] sm:h-[300px] lg:h-[350px] 
                         transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
            <Link 
              href="/games" 
              className="flex items-center justify-center h-full 
                         bg-yellow-400 text-xl sm:text-2xl font-bold text-gray-800
                         hover:bg-yellow-500 transition-colors"
            >
              Show ALL
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}