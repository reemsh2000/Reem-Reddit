const connection = require('../config/connection');

const getComments = (postId) => {
  const sql = { text: 'SELECT COMMENT_CONTENT,COMMENT_TIME,VOTES,PICTURE,USERNAME FROM COMMENT inner join users ON(USERS.ID=COMMENT.USER_ID) WHERE  POST_ID = $1  ', values: [postId] };
  return connection.query(sql);
};
module.exports = getComments;
