import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define the image data matching games with their corresponding images
  const imageData = [
    {
      gameId: 1, // Fantasy Adventure
      url: "https://i.ibb.co/ckYLWLM/Fantasy-Adventure.webp"
    },
    {
      gameId: 2, // Space Conquest
      url: "https://i.ibb.co/93JGsgc/Space-Conquest.webp"
    },
    {
      gameId: 3, // Mystery Island
      url: "https://i.ibb.co/cv22xrx/DALL-E-2024-11-05-19-15-29-A-captivating-game-cover-for-a-game-titled-Mystery-Island-The-scene-shows.webp"
    }
  ];

  try {
    // Create all images in a single transaction
    const createdImages = await prisma.$transaction(
      imageData.map(img => 
        prisma.image.create({
          data: {
            url: img.url,
            gameId: img.gameId
          }
        })
      )
    );

    console.log('Successfully added images:', createdImages);

    // Verify the results by fetching all games with their images
    const gamesWithImages = await prisma.game.findMany({
      include: {
        images: true
      }
    });

    console.log('Games with their images:', JSON.stringify(gamesWithImages, null, 2));

  } catch (error) {
    console.error('Error adding images:', error);
    throw error;
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });