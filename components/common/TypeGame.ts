export interface Game {
    id: number
    title: string
    genre: string | null
    description: string | null
    releaseDate: Date | null
    platform: string[]
    price: number | null
    rating: number | null
    images: {
      id: number
      url: string
    }[]
  }