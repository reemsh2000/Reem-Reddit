const { verify } = require('jsonwebtoken');

const verifyLogin = (req, res, cb) => {
  // eslint-disable-next-line consistent-return
  verify(req.cookies.token, process.env.SECRET_KEY, cb);
  cb();
};

module.exports = verifyLogin;
