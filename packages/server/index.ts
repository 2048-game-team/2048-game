import { createClientAndConnect } from './db';
import { startServer } from './server';

const run = async () => {
  await createClientAndConnect();
  await startServer();
};

run();
