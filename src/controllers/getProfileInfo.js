const { getUserInfo } = require('../database/queies');
const verifyLogin = require('./verifyLogin');
// verifyLogin

const getProfileInfo = (req, res) => {
  getUserInfo(req.params.username)
    .then((result) => result.rows)
    .then((result) => res.send(result[0]))
    .catch((error) => res.json({ msg: error }));
};
module.exports = getProfileInfo;
