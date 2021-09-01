const { join } = require('path');

const getIndexPage = (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'public', 'index.html'));
};
module.exports = getIndexPage;
