const express = require('express');
const router = express.Router();
const authService = require('../service/auth-service');

/* GET / page. */
router.get('/', function (req, res, next) {
    res.render('index', { url: authService.getUrlTokenRedirect() });
});

module.exports = router;