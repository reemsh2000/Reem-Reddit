const getHomePage = (req, res) => {
  res.json({ msg: 'hello from home' });
};
module.exports = getHomePage;
