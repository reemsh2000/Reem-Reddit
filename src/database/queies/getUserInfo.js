const connection = require('../config/connection');

const getUserInfo = (username) => {
  const sql = { text: 'SELECT * FROM USERS WHERE USERNAME = $1', values: [username] };
  return connection.query(sql);
};
module.exports = getUserInfo;
