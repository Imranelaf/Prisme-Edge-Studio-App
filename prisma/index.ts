import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define the data
  const FoundersData = [
    {
      name: 'john Doe',
      post: 'CIO',
      image: "https://cdn.pixabay.com/photo/2024/05/26/11/40/business-8788635_640.jpg"
    },
    {
      name: 'Smith Row',
      post: 'Senior game Developer',
      image: "https://cdn.pixabay.com/photo/2021/01/09/07/33/man-5901612_640.jpg"
    },
    {
      name: 'Maria Dara',
      post: 'Senior game designer',
      image: "https://cdn.pixabay.com/photo/2024/05/26/11/40/business-8788636_1280.jpg"
    }
  ];

    try{
      const founders = await prisma.founders.createMany({
        data: FoundersData
      })
      console.log('The founders has been created successfully!', JSON.stringify(founders, null, 2));
    } catch (error) {
    console.error('Error creaying the founders:', error);
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