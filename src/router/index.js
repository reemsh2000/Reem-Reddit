const router = require('express').Router();
const {
  login, logout, signup, getHomePage, getIndexPage,
  getProfileInfo, getPosts, addPost, getProfilePage,
} = require('../controllers');

router.get('/', getIndexPage);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/home', getHomePage);
router.get('/profile', getProfilePage);
router.get('/profile/:username', getProfilePage);
router.get('/profile/:username/info', getProfileInfo);
router.get('/posts', getPosts);
router.post('/post', addPost);
module.exports = router;
