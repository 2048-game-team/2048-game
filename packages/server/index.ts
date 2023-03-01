import { startServer } from './server';
import prisma from './src/db';

const run = async () => {
  await startServer();
};

run()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
