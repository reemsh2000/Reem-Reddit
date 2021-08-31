const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const jwt = require('jsonwebtoken');
const getUserInfo = require('../database/queies/getUserInfo');
const { comparePasswords } = require('../utilities/hashPassword');
// eslint-disable-next-line no-unused-vars
const login = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      // if (result.rows.length > 0) {
      console.log(typeof req.body.password);
      console.log(result.rows[0].user_password);
      comparePasswords(req.body.password, result.rows[0].user_password, (err, resu) => {
        if (err) {
          res.status(404).json({ msg: `error in passs ${err}` });
        // eslint-disable-next-line no-console
        } else {
          console.log(` ${resu}`);
          res.json({ msg: `hiii ${resu}` });
        }
      });
      //       .then((success) => {
      //         console.log(success);
      //         // if (success) {
      //         //   jwt.sign(req.body.username, process.env.SECRET, (error, token) => {
      //         //     if (token) {
      //         //       res.cookie('name', token).redirect('/');
      //         //     }
      //         //   });
      //         // }
      // console.log(result);
    })
  //  }

  // })
    .catch((error) => res.json({ msg: `username must be uniqe ${error}` }).redirect('/'));
};

module.exports = login;
