const connection = require('../config/connection');
const { hashPassword } = require('../../utilities/hashPassword');

const inserUser = (username, email, password) => {
  hashPassword(password)
    // eslint-disable-next-line no-shadow
    .then((hashPassword) => {
      const sql = {
        text: 'INSERT INTO  USERS (USERNAME,EMAIL,USER_PASSWORD ) VALUES($1,$2,$3)  RETURNING id;',
        values: [username, email, hashPassword],
      };
      return connection.query(sql);
    });
};
// inserUser('lina','l@gmail.com','123456');
module.exports = inserUser;
