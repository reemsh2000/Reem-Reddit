const router = require('express').Router();
const {
  login, logout, signup, getHomePage, getIndexPage, getProfilePage,
} = require('../controllers');

router.get('/', getIndexPage);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
router.get('/home', getHomePage);
router.get('/profile/:username', getProfilePage);
module.exports = router;
