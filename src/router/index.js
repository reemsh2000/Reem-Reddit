const router = require('express').Router();
const {
  login, logout, signup, getHomePage, getIndexPage, getProfilePage, getPosts, addPost,
} = require('../controllers');

router.use('/', (req, res, next) => {
  console.log(req.method, req.path);
  next();
});
router.get('/', getIndexPage);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/home', getHomePage);
router.post('/post', addPost);
router.get('/posts', getPosts);
router.get('/profile/:username', getProfilePage);
module.exports = router;
