const express = require('express');
const router = express.Router();
const sessionService = require('../service/session-service');
const profileService = require('../service/profile-service');

router.get('/', sessionService.checkSession, function (req, res) {
    profileService.getProfile(req)
        .then(profile => {
            res.json(profile);
            req.session.profile = profile;
        })
        .catch(err => new Error(err));
});

module.exports = router;