const showComment = (req, res) => {
  const postId = req.params;
  // console.log(postId)
  res.redirect('/profile');
};
module.exports = showComment;
