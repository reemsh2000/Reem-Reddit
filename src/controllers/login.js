const { checkUserExsit } = require('../database/queies');
const { comparePasswords } = require('../utilities');

const login = (req, res) => {
  checkUserExsit(req.body.username)
    .then((exist) => {
      if (exist.rows[0].exists) {
        comparePasswords(req.body.password, result.rows[0].user_password, (err, resu) => {
          if (err) {
            res.status(404).json({ msg: `error in passs ${err}` });
          } else {
            res.json({ msg: `hiii ${resu}` });
          }
        });
      }
    })
    .catch((error) => res.json({ msg: `user not a member ${error}` }).redirect('/'));
};

module.exports = login;
