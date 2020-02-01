const express = require('express');
const router = express.Router();
const constants = require('../model/logic/constants');

router.get('/', function (req, res) {
    res.status(constants.HTTP_INTERNAL_SERVER_ERROR)
        .render('ping-no-auth');
});

module.exports = router;