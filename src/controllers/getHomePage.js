const { join } = require('path');

const getHomePage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'index.html'));
};
module.exports = getHomePage;
