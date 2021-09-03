const router = require('express').Router();
const {
  login, logout, signup, getHomePage, getIndexPage,
  getProfileInfo, getPosts, addPost, getProfilePage, updateProfile, addComment, showComment,
} = require('../controllers');

router.get('/', getIndexPage);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/home', getHomePage);
router.get('/profile', getProfilePage);
router.get('/profile/:username', getProfilePage);
router.get('/profile/:username/info', getProfileInfo);
router.post('/update-profile', updateProfile);
router.get('/posts', getPosts);
router.post('/post', addPost);
router.post('/add-comment', addComment);
router.get('/show-comments', showComment);
module.exports = router;
