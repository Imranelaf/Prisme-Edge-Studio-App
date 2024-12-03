/* This script fetch all the users in the data base after the request and return all the data back */
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.users.findMany(); 
    
    return NextResponse.json(data);
  } catch (err) {
    console.log('Error fetching users:', err);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
