const { verify } = require('jsonwebtoken');

// eslint-disable-next-line no-unused-vars
const verifyLogin = (req, res) => verify(req.cookies.token, process.env.SECRET_KEY);

module.exports = verifyLogin;
