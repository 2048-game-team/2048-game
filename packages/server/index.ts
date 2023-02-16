import { createClientAndConnect } from './db';
import { startServer } from './startServer';

const run = async () => {
  await createClientAndConnect();
  await startServer();
};

run();
