import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const founders = await prisma.founders.findMany({});
        return NextResponse.json(founders);
    } catch (error) {
        console.error('Error fetching founders:', error);
        return NextResponse.json({ error: 'Error fetching founders' }, { status: 500 });
    }
}
