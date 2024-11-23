import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { method, url } = request;

  if (method === "POST" && url.includes("api/games")) {
    try {
      const dataSend = await request.json();
      const { title, genre, price, platform } = dataSend;

      console.log('THIS MESSAGE FROM MIDDLEWARE', title, genre, price, platform);

      // Validation: Check required fields
      if (!title || !genre || !price) {
        console.log('Validation error: Missing fields');
        return new NextResponse(
          JSON.stringify({ error: 'Title, genre, and price are required fields.' }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }

      // Validation: Check platform values
      const allowedPlatforms = ['xbox', 'pc', 'playstation'];
      if (!platform || !Array.isArray(platform) || platform.some((p) => !allowedPlatforms.includes(p))) {
        console.log('Validation error: Invalid platform');
        return new NextResponse(
          JSON.stringify({
            error: `Platform must be an array containing only: ${allowedPlatforms.join(', ')}`,
          }),
          { status: 400, headers: { 'Content-Type': 'application/json' } }
        );
      }
    } catch (error) {
      console.error('Middleware error:', error);
      return new NextResponse(
        JSON.stringify({ error: 'Invalid request payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }

  // Allow the request to proceed if validation passes
  return NextResponse.next();
}
