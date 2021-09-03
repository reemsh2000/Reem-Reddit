const { join } = require('path');
const verifyLogin = require('./verifyLogin');

const getCommentsPage = (req, res) => {
  verifyLogin(req, res, (err) => {
    if (err) {
      res.json({ msg: 'you are not verified' });
    } else {
      res.sendFile(join(__dirname, '..', '..', 'public', 'html', 'comments.html'));
    //   next();
    }
  });
};
module.exports = getCommentsPage;
