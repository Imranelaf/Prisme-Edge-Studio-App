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
const gameId = '761bea88-ca1a-4071-baf5-482d5888899f';

deleteGameById(gameId)
  .then(() => {
    console.log('Deletion script completed.');
  })
  .catch((e) => {
    console.error('Script failed:', e);
    process.exit(1);
  });
