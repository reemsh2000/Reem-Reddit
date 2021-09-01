const { insertPost, getId } = require('../database/queies');

const addPost = (req, res) => {
  getId(req.cookies.username).then((result) => {
    const { postContent, imgLink } = req.body;
    insertPost(result.rows[0].id, postContent, imgLink);
    res.redirect('/home');
  });
};
module.exports = addPost;
