import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteGameById(gameId: string) {
  try {
    // Delete associated images first
    await prisma.image.deleteMany({
      where: { gameId: gameId },
    });

    // Then delete the game
    const deletedGame = await prisma.game.delete({
      where: { id: gameId },
    });

    console.log('Game and associated images deleted successfully:', JSON.stringify(deletedGame, null, 2));
  } catch (error) {
    console.error('Error deleting the game:', error);
    throw error;
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}

// Replace with your game ID
const gameId = '86957ef2-ec8b-4385-ad6a-0f9ff3ebaef9';

deleteGameById(gameId)
  .then(() => {
    console.log('Deletion script completed.');
  })
  .catch((e) => {
    console.error('Script failed:', e);
    process.exit(1);
  });
