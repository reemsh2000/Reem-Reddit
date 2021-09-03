const { getComments } = require('../database/queies');

const showComment = (req, res) => {
  const { postId } = req.params;
  getComments(postId).then((result) => result.rows);
  // res.redirect('/comments');
};
module.exports = showComment;
