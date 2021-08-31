const connection = require('../config/connection');

const checkUserExsit = (username) => {
  const sql = { text: 'SELECT exists(SELECT id FROM USERS WHERE USERNAME = $1 ) ', values: [username] };
  return connection.query(sql);
};
module.exports = checkUserExsit;
