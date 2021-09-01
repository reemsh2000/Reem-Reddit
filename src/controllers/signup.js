const { insertUser, checkUserExsit } = require('../database/queies');
const { signupValidation, hashPassword, setCookie } = require('../utilities');
// eslint-disable-next-line no-unused-vars
const signup = (req, res, next) => {
  signupValidation.validateAsync(req.body)
    .then((value) => {
      req.body.value = value;
      checkUserExsit(req.body.username)
        .then((exist) => {
          if (exist.rows[0].exists) {
            res.json({ msg: 'There is already an accout with this username .' });
          } else {
            hashPassword(req.body.password)
              .then((hash) => {
                insertUser(req.body.username, req.body.email, hash);
                setCookie(res, req.body.username, true);
                res.redirect('/home');
              })
              .catch((error) => res.json({ msg: `there is error here in hash ${error}` }));
          }
        }).catch((error) => res.json({ msg: `there is error here ${error}` }));
    })
    .catch((error) => res.json({ msg: `there is error ${error}` }));
};
module.exports = signup;
