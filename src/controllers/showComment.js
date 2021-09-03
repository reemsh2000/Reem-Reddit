const { getComments } = require('../database/queies');

const showComment = (req, res) => {
  const { postId } = req.params;
  getComments(postId)
    .then((result) => res.json(result.rows))
    .catch((error) => res.json({ msge: error }));
};
module.exports = showComment;
