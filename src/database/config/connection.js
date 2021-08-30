const { Pool } = require('pg');
require('env2')('config.env');

const {
  NODE_ENV, DEV_DB_URL, DATABASE_URL, TEST_DB_URL,
} = process.env;

let dbUrl = '';

// switch (NODE_ENV) {
//   case 'production':
//     dbUrl = DATABASE_URL;
//     break;
//   case 'development':
//     dbUrl = DEV_DB_URL;
//     break;
//   case 'testing':
//     dbUrl = TEST_DB_URL;
//     break;
//   default:
//     throw new Error('database doesn\'t exist');
// }

const options = {
  connectionString: DEV_DB_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};
module.exports = new Pool(options);
