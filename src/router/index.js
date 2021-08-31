const router = require('express').Router();
const {
  login, logout, signup, getHomePage,
} = require('../controllers');

router.get('/', getHomePage);
router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);

module.exports = router;
