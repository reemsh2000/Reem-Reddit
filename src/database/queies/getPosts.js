const connection = require('../config/connection');

const getPosts = () => connection.query('select * from POSTS;');
module.exports = getPosts;
