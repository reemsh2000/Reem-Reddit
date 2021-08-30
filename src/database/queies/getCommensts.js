const connection = require('../config/connection');

const getComments = (postId) => {
  const sql = { text: 'SELECT * FROM COMMENT WHERE  POST_ID = $1', values: [postId] };
  return connection.query(sql);
};
module.exports = getComments;
