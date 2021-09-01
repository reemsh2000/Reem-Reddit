const { clearCookie } = require('../utilities');

const logout = (req, res) => {
  clearCookie(res);
  res.redirect('/');
};
module.exports = logout;
