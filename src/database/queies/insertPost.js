const connection = require('../config/connection');

const insertPost = (userId, content, img) => connection
  .query('insert into POSTS ( USER_ID, POST_CONTENT,POST_IMG) values($1,$2,$3) returning id;', [userId, content, img]);

module.exports = insertPost;
