const router = require('express').Router();
const home = require('./home');
const registration = require('./registration');

router.use('/home', home);
router.use('/', registration);
module.exports = router;
