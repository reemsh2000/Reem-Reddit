const router = require('express').Router();
const { getHomePage } = require('../controllers');

router.get('/', getHomePage);
module.exports = router;
