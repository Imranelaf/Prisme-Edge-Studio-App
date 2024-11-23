import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define the data
  const gamesData = [
    {
      title: 'Epic Adventure',
      genre: 'Action',
      description: 'An exciting action-packed game.',
      releaseDate: '2024-01-01',
      platform: ['PC', 'PS5'],
      price: 59.99,
      rating: 4.8,
      images: {
        create: [
          {
            url: 'https://cdn.pixabay.com/photo/2024/11/11/14/05/flamingo-9190160_640.jpg',
          },
          {
            url: 'https://cdn.pixabay.com/photo/2023/01/24/15/11/nave-7741260_640.jpg',
          },
        ],
      },
    },
    {
      title: 'Mystery Island',
      genre: 'Adventure',
      description: 'Solve mysteries on a deserted island.',
      releaseDate:'2023-12-15',
      platform: ['Xbox', 'PC'],
      price: 49.99,
      rating: 4.5,
      images: {
        create: [
          {
            url: 'https://example.com/image3.jpg',
          },
        ],
      },
    },
  ];

  try {
    // Create the games and associated images
    for (const gameData of gamesData) {
      const game = await prisma.game.create({
        data: gameData,
        include: {
          images: true,
        },
      });
      console.log('Game created successfully:', JSON.stringify(game, null, 2));
    }
  } catch (error) {
    console.error('Error creating games:', error);
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
