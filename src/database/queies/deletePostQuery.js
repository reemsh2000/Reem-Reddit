const connection = require('../config/connection');

const deletePostQuery = (postId) => {
  const sql = { text: 'DELETE FROM Posts WHERE ID = $1', values: [postId] };
  return connection.query(sql);
};
module.exports = deletePostQuery;
