const showComment = (req, res) => {
  console.log(req.body);
  res.json({ msg: req.body });
};
module.exports = showComment;
