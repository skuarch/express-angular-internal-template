const express = require('express');
const config = require('./config');
const routesConfig = require('./config/routes-config');
const app = express();

config.setUpViewEngine(app);
config.setUpBodyParser(app);
config.setUpLogger(app);
config.sessionConfig(app);
routesConfig.prepareRoutes(app);
config.redirectAngular(app);
config.setUp404Error(app);
config.errorHandler(app);
config.log4jsConfig();

module.exports = app;