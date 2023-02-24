const fs = require('fs')

fs.copyFileSync('.env.sample', '.env')

fs.copyFileSync('.env.db.sample', './packages/server/.env');

fs.mkdirSync('tmp/pgdata', { recursive: true })
