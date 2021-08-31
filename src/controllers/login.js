/* eslint-disable no-console */
const { join } = require('path');
const { getUserInfo } = require('../database/queies');
const { comparePasswords } = require('../utilities');

const login = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      console.log(req.body.password);
      console.log(result.rows[0].user_password);
      if (result.rows.length === 1) {
        comparePasswords(req.body.password, result.rows[0].user_password).then((resu) => {
          res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'home.html'));
        });
      }
    })

    .catch((error) => {
      console.log(error);
      res.json({ msg: `user not a member ${error}` });
    });
  // .redirect('/'));
};

module.exports = login;
