const express = require('express');
const router = express.Router();
const constants = require('../model/logic/constants');

router.get('/', function (req, res) {
    res.status(constants.UNAUTHENTICATED);
    res.render('access-denied');
});

module.exports = router;