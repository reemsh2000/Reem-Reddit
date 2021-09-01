const connection = require('../config/connection');

const insertComment = (userId, postId, content) => connection
  .query('insert into COMMENT ( USER_ID, POST_ID, COMMENT_CONTENT) values($1,$2,$3) returning id', [userId, postId, content]);

module.exports = insertComment;
