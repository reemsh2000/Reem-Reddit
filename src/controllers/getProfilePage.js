const { join } = require('path');

const getProfilePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'profile.html'));
};
module.exports = getProfilePage;
