const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const randomstring = require('randomstring');
const env = require('../environment');
const logService = require('../service/log4js-service');
const log4js = require('log4js');
const endpoints = require('../model/logic/endpoints');
const sessionService = require('../service/session-service');
const constants = require('../model/logic/constants');

exports.setUpViewEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'html');
    app.engine('html', require('hbs').__express);
};

exports.setUpLogger = (app) => {
    app.use(logger('dev'));
};

exports.setUpBodyParser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
};

exports.configError = (app) => {
    app.get(endpoints.error, function (req, res) {
        res.status(constants.HTTP_INTERNAL_SERVER_ERROR)
            .render('error');
    });
};

exports.redirectAngular = (app) => {
    app.all(endpoints.ctxAll, sessionService.checkSessionRedirect, function (req, res, next) {
        res.sendFile('index.html', { root: path.join(__dirname, '../../../web-client/dist') });
    });
};

exports.setUp404Error = (app) => {
    app.use(function (req, res, next) {
        res.status(constants.HTTP_NOT_FOUND);
        res.render('error-404');
    });
};

/* jshint ignore:start */
exports.errorHandler = (app) => {
    app.use(function (err, req, res, next) {
        logService.logError('errorHandler()', err);
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'local' ? err : {};

        // render the error page
        res.status(err.status || constants.HTTP_INTERNAL_SERVER_ERROR)
            .render('error');
    });
};
/* jshint ignore:end */

exports.sessionConfig = (app) => {
    app.use(cookieSession({
        name: env.sessionName,
        secret: randomstring.generate(),
        httpOnly: true,
        maxAge: env.sessionTime,
        secure: env.sessionSecure,
        overwrite: false,
        rolling: true,
        resave: false
    }));
};

exports.log4jsConfig = () => {
    log4js.configure({
        appenders: {
            out: { type: 'stdout' },
            app: { type: 'file', filename: '/tmp/web-server/log/web-server.log' }
        },
        categories: {
            default: { appenders: ['out', 'app'], level: 'error' }
        }
    });
};
