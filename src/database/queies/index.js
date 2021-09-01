const getUserInfo = require('./getUserInfo');
const getComments = require('./getCommensts');
const insertUser = require('./insertUser');
const checkUserExsit = require('./checkUserExsit');
const getPostsQuery = require('./getPosts');
const insertPost = require('./insertPost');
const insertComment = require('./insertComment');
const getId = require('./getId');

module.exports = {
  getUserInfo,
  getComments,
  insertUser,
  checkUserExsit,
  getPostsQuery,
  insertPost,
  insertComment,
  getId,
};
