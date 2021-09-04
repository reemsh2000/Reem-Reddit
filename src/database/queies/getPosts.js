const connection = require('../config/connection');

const getPosts = () => connection.query('select post_content,votes,post_time,username,picture,POST_IMG,POSTS.ID from POSTS inner join USERS ON (USERS.ID=POSTS.USER_ID) order by votes,POST_TIME desc;');
module.exports = getPosts;
