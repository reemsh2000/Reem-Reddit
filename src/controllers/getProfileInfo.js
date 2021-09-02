const { getUserInfo } = require("../database/queies");

const getProfileInfo = (req, res) => {
  getUserInfo(req.params.username).then()
};
module.exports = getProfileInfo;
