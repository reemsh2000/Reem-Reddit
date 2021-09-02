const { updateUser } = require('../database/queies');
const { hashPassword } = require('../utilities');
const verifyLogin = require('./verifyLogin');

const updateProfile = (req, res) => {
  const { newpassword, newProfileImage, newUserEmail } = req.body;
  const verify = verifyLogin(req, res);
  const { userName } = verify;
  hashPassword(newpassword).then((password) => {
    updateUser(userName, newProfileImage, password, newUserEmail);
    res.redirect('/profile');
  });
};
module.exports = updateProfile;
