const getUserInfo = require('../database/queies/getUserInfo');
const insertUser = require('../database/queies/insertUser');

// eslint-disable-next-line no-unused-vars
const signup = (req, res) => {
  getUserInfo(req.body.username)
    .then((result) => {
      if (result.rows.length === 0) {
        insertUser(req.body.username, req.body.email, req.body.password);
      }
    })
    .catch((error) => res.json({ msg: `username must be uniqe ${error}` }));
};
module.exports = signup;
