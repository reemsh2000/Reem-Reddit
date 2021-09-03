const { join } = require('path');
const verifyLogin = require('./verifyLogin');

const getProfilePage = (req, res) => {
  verifyLogin(req, res, (err) => {
    if (err) {
      res.json({ msg: 'you are not verified' });
    } else {
      res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
    }
  });
};
module.exports = getProfilePage;
