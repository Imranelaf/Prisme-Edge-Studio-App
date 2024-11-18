/* 
  This function handles GET requests to fetch game data:
  1. Checks for the presence of the 'id' parameter in the URL:
     - If no 'id' is provided, it fetches all game data with their associated images.
     - If 'id' is provided, it fetches the specific game data with its associated images.
  2. Handles three states:
     - Success: Returns the requested data as JSON.
     - Not Found: Returns a 404 error if the specified game is not found.
     - Error: Returns a 500 error for unexpected issues during data retrieval.
*/  

import { PrismaClient } from '@prisma/client'
import { NextRequest, NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const id = params.get('id')
  console.log(id);
  
  
  
  

  try {
    if (!id) {
      const data = await prisma.game.findMany({
        include: {
          images: true
        }
      })
      return NextResponse.json(data)
    }
  
    const data = await prisma.game.findUnique({
      where: {
        id: id
      },
      include: {
        images: true
      }
    })
    if (!data){
      return NextResponse.json(
        {error: 'Game Not Found'},
        {status: 404}
      )
    }
    return NextResponse.json(data)
    
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error fetching games' },
      { status: 500 }
    )
  }
  
}