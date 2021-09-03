const { deletePostQuery } = require('../database/queies');
const verifyLogin = require('./verifyLogin');

const deletePost = (req, res) => {
  verifyLogin(req, res, (err) => {
    if (err) {
      res.json({ msg: 'you are not verified' });
    } else {
      const { postId } = req.params;
      deletePostQuery(postId)
        .then(() => {
          res.redirect('/home');
        });
    }
  });
};

module.exports = deletePost;
