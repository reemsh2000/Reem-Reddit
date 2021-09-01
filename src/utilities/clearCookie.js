const clearCookie = (res) => {
  res.clearCookie('token');
  res.clearCookie('logedIn');
  res.clearCookie('username');
};
module.exports = clearCookie;
