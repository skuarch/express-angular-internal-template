const express = require('express');
const router = express.Router();
const authService = require('../service/auth-service');

router.post('/', function (req, res) {
    authService
        .logout(req, res);
});

module.exports = router;