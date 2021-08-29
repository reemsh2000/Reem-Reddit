const router = require('express').Router();
const { login, logout, signup } = require('../controllers');

router.post('/login', login);
router.post('/signup', signup);
router.get('/logout', logout);
module.exports = router;
