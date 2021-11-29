const { insertPost, getId } = require('../database/queies');

const addPost = (req, res) => {
  getId(req.cookies.username).then((result) => {
    let { imgLink } = req.body;
    const { postContent } = req.body;
    if ((typeof imgLink.naturalWidth !== 'undefined' && imgLink.naturalWidth === 0) || (!imgLink.complete)) {
      imgLink = 'https://bitsofco.de/content/images/2018/12/broken-1.png';
    }
    insertPost(result.rows[0].id, postContent, imgLink);
    res.redirect('/home');
  });
};
module.exports = addPost;
