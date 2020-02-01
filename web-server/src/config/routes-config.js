const express = require('express');
const path = require('path');
const index = require('../routes/index');
const login = require('../routes/login');
const endpoints = require('../model/logic/endpoints');
const sessionService = require('../service/session-service');
const publicFolder = '../public';
const pingError = require('../routes/ping-error');
const pingNoAuth = require('../routes/ping-no-auth');
const appNoAuth = require('../routes/app-no-auth');
const profile = require('../routes/profile');
const logout = require('../routes/logout');
const error = require('../routes/error');
const proxy = require('../routes/proxy');
const health = require('../routes/health');
const accessDenied = require('../routes/access-denied');

function configureEndpoints(app) {
    app.use(endpoints.index, index);
    app.use(endpoints.login, login);
    app.use(endpoints.proxy, proxy);
    app.use(endpoints.pingError, pingError);
    app.use(endpoints.pingNoAuth, pingNoAuth);
    app.use(endpoints.appNoAuth, appNoAuth);
    app.use(endpoints.profile, profile);
    app.use(endpoints.logout, logout);
    app.use(endpoints.error, error);
    app.use(endpoints.health, health);
    app.use(endpoints.accessDenied, accessDenied);
}

exports.prepareRoutes = (app) => {
    app.set('view options', { layout: false });
    app.use(
        endpoints.ctx,
        sessionService.checkSessionRedirect,
        express.static(path.join(__dirname, '../../../web-client/dist'))
    );
    configureEndpoints(app);
    app.use(endpoints.index, express.static(path.join(__dirname, '../../../web-client/dist')));
    app.use(express.static(path.join(__dirname, publicFolder)));
};

