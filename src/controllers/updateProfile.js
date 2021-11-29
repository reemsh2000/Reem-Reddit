const { updateUser } = require('../database/queies');
const { hashPassword } = require('../utilities');
const verifyLogin = require('./verifyLogin');

const updateProfile = (req, res) => {
  const { newpassword, newUserEmail } = req.body;
  let { newProfileImage } = req.body;
  if ((typeof newProfileImage.naturalWidth !== 'undefined' && newProfileImage.naturalWidth === 0) || (!newProfileImage.complete)) {
    newProfileImage = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
  }
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
