// app/api/games/route.ts
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const games = await prisma.game.findMany({
      include: {
        images: true
      }
    })
    return NextResponse.json(games)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching games' }, { status: 500 })
  }
}
