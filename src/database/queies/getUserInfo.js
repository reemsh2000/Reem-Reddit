const connection = require('../config/connection');

const getUserInfo = (id) => {
  const sql = { text: 'SELECT * FROM USERS WHERE ID = $1', values: [id] };
  return connection.query(sql);
};
module.exports = getUserInfo;
