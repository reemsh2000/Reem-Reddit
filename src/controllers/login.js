const { getUserInfo } = require('../database/queies');
const { comparePasswords, setCookie } = require('../utilities');

const login = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      if (result.rows.length === 1) {
        comparePasswords(req.body.password, result.rows[0].user_password).then((resu) => {
          if (resu) {
            setCookie(res, req.body.username, true);
            res.redirect('/home');
          }
        });
      } else res.json({ msg: 'You should sign up first' });
    })
    .catch((error) => {
      res.json({ msg: `user not a member ${error}` });
    });
};

module.exports = login;
