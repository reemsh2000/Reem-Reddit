const connection = require('../config/connection');

const inserUser = (username, email, password) => {
  const sql = {
    text: 'INSERT INTO  USERS (USERNAME,EMAIL,USER_PASSWORD ) VALUES($1,$2,$3)  RETURNING id;',
    values: [username, email, password],
  };
  return connection.query(sql);
};
// inserUser('lina','l@gmail.com','123456');
module.exports = inserUser;
