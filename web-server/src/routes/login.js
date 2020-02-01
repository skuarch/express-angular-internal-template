const express = require('express');
const router = express.Router();
const authService = require('../service/auth-service');

router.get('/', function (req, res) {
    authService
        .authPing(req, res);
});

module.exports = router;