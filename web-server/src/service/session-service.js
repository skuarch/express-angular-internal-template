const constants = require('../model/logic/constants');
const endpoints = require('../model/logic/endpoints');

module.exports.getToken = (req) => {
    return req.session.token;
};

module.exports.checkSession = (req, res, next) => {

    const session = req.session;

    if (!session || !session.token) {
        return res
            .status(constants.UNAUTHENTICATED)
            .send({ code: constants.UNAUTHENTICATED, error: 'Unauthorized/No session' });
    } else {
        return next();
    }

};

module.exports.checkSessionRedirect = (req, res, next) => {

    const session = req.session;

    if (!session || !session.token) {
        res.status(constants.UNAUTHENTICATED);
        res.redirect(endpoints.appNoAuth);
    } else {
        return next();
    }

};
