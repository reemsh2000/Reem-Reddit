const { insertComment, getId } = require('../database/queies');

const addComment = (req, res) => {
  const { postId, comment } = req.body;
  getId(req.cookies.username).then((result) => {
    insertComment(result.rows[0].id, postId, comment);
    res.redirect('/home');
  });
};
module.exports = addComment;
