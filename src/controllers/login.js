const { join } = require('path');
const { getUserInfo } = require('../database/queies');
const { comparePasswords, setCookie } = require('../utilities');

const login = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      if (result.rows.length === 1) {
        comparePasswords(req.body.password, result.rows[0].user_password).then((resu) => {
          if (resu) {
            setCookie(res, req.body.username, true)
            res.redirect('/home');
          }
        });
      }
    })

    .catch((error) => {
      res.json({ msg: `user not a member ${error}` });
    });
};

module.exports = login;
