const connection = require('../config/connection');

const getId = (username) => {
  const sql = { text: 'SELECT id FROM USERS WHERE USERNAME = $1', values: [username] };
  return connection.query(sql);
};
module.exports = getId;
