const logout = (req, res) => {
  res.clearCookie('token');
  res.clearCookie('logedIn');
  res.clearCookie('username');
  res.redirect('/');
};
module.exports = logout;
