const connection = require('../config/connection');

const updateUser = (username, profileImg, password, email) => {
  const sql = {
    text: 'UPDATE  USERS SET PICTURE =$1,USER_PASSWORD =$2, Email=$3 where username=$4',
    values: [profileImg, password, email, username],
  };
  return connection.query(sql);
};
module.exports = updateUser;
