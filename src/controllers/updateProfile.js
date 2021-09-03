const { updateUser } = require('../database/queies');
const { hashPassword } = require('../utilities');
const verifyLogin = require('./verifyLogin');

const updateProfile = (req, res) => {
  const { newpassword, newProfileImage, newUserEmail } = req.body;
  verifyLogin(req, res, (err, decoded) => {
    if (err) {
      res.json({ msg: 'you are not verified' });
    } else {
      const { userName } = decoded;
      hashPassword(newpassword).then((password) => {
        updateUser(userName, newProfileImage, password, newUserEmail);
        res.redirect(`/profile/${userName}`);
      });
    }
  });
};
module.exports = updateProfile;
