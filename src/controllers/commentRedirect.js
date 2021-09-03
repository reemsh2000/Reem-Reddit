const commentRedirect = (req, res) => {
  const { postId } = req.params;
  res.redirect(`/comments/${postId}`);
};
module.exports = commentRedirect;
