const { getPostsQuery } = require('../database/queies');

const getPosts = (req, res) => {
  getPostsQuery()
    .then((result) => res.json(result.rows))
    .catch((error) => res.json({ msge: error }));
};
module.exports = getPosts;
