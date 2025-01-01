/* This script fetches all the users in the database after the request and returns all the data back */
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const data = await prisma.users.findMany();
        return NextResponse.json(data);
    } catch (err) {
        console.error('Error fetching users:', err);
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
