'use client'
import { useEffect, useState } from 'react'
import type { Game } from './TypeGame'
import Link from 'next/link'
import Image from 'next/image'

export const Card = ({ showAll = true }) => {
  const [games, setGames] = useState<Game[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch('/api/games')
        const data = await response.json()
        setGames(data)
      } catch (error) {
        console.log('Error fetching games:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchGames()
  }, [])
 
  if (loading) return <h1 className="text-2xl font-semibold text-gray-700 m-8">Loading...</h1>

  return (
    <>
      <div className='mx-auto px-5 py-8 text-center'>
        <h1 className="text-teal-800/100 font-extrabold uppercase text-4xl tracking-wide">Our Games</h1>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid-rows-[350px] gap-8 p-8">
        {games.map((game) => (
          
          <div key={game.id} className="relative border border-gray-300 rounded-lg overflow-hidden shadow transition-transform duration-200 cursor-pointer hover:transform hover:translate-x-1 hover:translate-y-[-5px] hover:shadow-lg">
            <Link href={`/games/${game.id}`}>
            <div className="w-full h-full overflow-hidden">
              {game.images[0] && (
                 <Image
                 src={game.images[0].url}
                 alt={game.title}
                 fill
                 className="object-cover"
               />
              )}
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-200 text-white font-bold text-lg p-4">
              <h2 className="text-xl mb-1">{game.title}</h2>
              {game.genre && <h4 className="text-gray-300">Genre: {game.genre}</h4>}
            </div>
            </Link>
          </div>
        ))}
        {showAll && (
          <Link key={0} href="/games" className="flex items-center justify-center bg-yellow-400 rounded-lg text-2xl font-bold text-gray-800 transition-transform duration-200 cursor-pointer hover:transform hover:translate-x-1 hover:translate-y-[-5px] hover:shadow-lg">
            <h2>Show ALL</h2>
          </Link>
        )}
      </div>
    </>
  )
}