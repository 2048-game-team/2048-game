import { dbConnect } from './src/db';
import { startServer } from './server';

const run = async () => {
  await dbConnect();
  await startServer();
};

run();
