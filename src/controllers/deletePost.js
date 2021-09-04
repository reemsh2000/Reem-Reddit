const { deletePostQuery } = require('../database/queies');
const verifyLogin = require('./verifyLogin');

const deletePost = (req, res) => {
  verifyLogin(req, res, (err, decoded) => {
    if (err) {
      res.json({ msg: 'you are not verified' });
    }
    if (decoded === req.cookies.username) {
      const { postId } = req.params;
      deletePostQuery(postId)
        .then(() => {
          res.redirect('/home');
        });
    }
  });
};

module.exports = deletePost;
