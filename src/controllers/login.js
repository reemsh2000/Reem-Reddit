const bcrypt = require('bcryptjs');
// eslint-disable-next-line no-unused-vars
const jwt = require('jsonwebtoken');
const getUserInfo = require('../database/queies/getUserInfo');

// eslint-disable-next-line no-unused-vars
const login = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      if (result.rows.length > 0) {
        // bcrypt.compare(req.body.password, result.rows[0].password);
        res.send('yes');
        //       .then((success) => {
        //         console.log(success);
        //         // if (success) {
        //         //   jwt.sign(req.body.username, process.env.SECRET, (error, token) => {
        //         //     if (token) {
        //         //       res.cookie('name', token).redirect('/');
        //         //     }
        //         //   });
        //         // }
        //       });
      }
    })
    .catch((error) => res.json({ msg: `username must be uniqe ${error}` }));
};

module.exports = login;
