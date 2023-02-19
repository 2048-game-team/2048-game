import { dbConnect } from './db';
import { startServer } from './server';

const run = async () => {
  await dbConnect();
  await startServer();
};

run();
