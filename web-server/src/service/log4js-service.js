const log4js = require('log4js');
const logger = log4js.getLogger('middleware');

module.exports.logError = (message, error) => {
    logger.error(message, error);
};