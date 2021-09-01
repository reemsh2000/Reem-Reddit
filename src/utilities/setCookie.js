// eslint-disable-next-line no-unused-vars
const { sign } = require('jsonwebtoken');
const createSession = require('./createSession');

const setCookie = (res, username, logedin) => {
  res.cookie('token', createSession(username), { httponly: true, secure: true });
  res.cookie('logedIn', logedin);
  res.cookie('username', username);
};
module.exports = setCookie;
