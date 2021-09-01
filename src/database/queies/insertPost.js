const connection = require('../config/connection');

const insertPost = (userId, content) => connection
  .query('insert into POSTS ( USER_ID, POST_CONTENT) values($1,$2) returning id', [userId, content]);

module.exports = insertPost;
