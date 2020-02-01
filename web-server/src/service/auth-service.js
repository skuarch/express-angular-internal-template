const env = require('../environment');
const ClientOAuth2 = require('client-oauth2');
const log4js = require('../service/log4js-service');
const endpoints = require('../model/logic/endpoints');
const jwt_decode = require('jwt-decode');
const constants = require('../model/logic/constants');

module.exports.pingAuth = new ClientOAuth2({
    clientId: env.clientId,
    clientSecret: env.clientSecret,
    accessTokenUri: env.accessTokenUri,
    authorizationUri: env.authorizationUri,
    urlProfile: env.urlProfile,
    redirectUri: env.redirectUri,
    scopes: env.scopes
});

module.exports.getUrlTokenRedirect = () => {
    return this.pingAuth.code.getUri();
};

module.exports.getCodeParam = (req) => {
    if (!req) {
        throw new Error('req is undefinied');
    }
    const code = req.query.code;
    if (!code) {
        throw new Error('code is undefinied');
    }
    return code;
};

module.exports.headersRequestToken = {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
};

module.exports.authPing = (req, res) => {
    if (!req) {
        throw new Error('req is undefinied');
    }

    if (!res) {
        throw new Error('res is undefinied');
    }
    
    const error = req.query.error;
    if(error && error == 'access_denied') {
        res.status(constants.UNAUTHENTICATED);
        res.redirect(endpoints.accessDenied);
    } else if(error) {
        throw new Error(error);
    }

    if (!this.getCodeParam(req)) {
        res.status(constants.HTTP_BAD_REQUEST);
        throw 'param code is undefinied';
    }
    
    this.pingAuth.code.getToken(req.originalUrl).then(
        token => {
            if (!token.data.access_token) {
                throw new Error('access token is not valid, empty or undefinied');
            }
            let tkn = jwt_decode(token.data.access_token);
            if (!tkn) {
                throw new Error('impossible to retrive token, token is undefinied');
            }
            req.session.token = tkn;
            res.redirect(endpoints.ctx);
        },
        error => {
            log4js.logError('authPing(), Token could not be retreived. ', error);
            res.status(constants.HTTP_INTERNAL_SERVER_ERROR);
            res.render(endpoints.pingError);
        }
    );
};

module.exports.logout = (req, res) => {
    req.session.profile = undefined;
    req.session = null;
    res.send({ logout: true });
    res.end();
};
