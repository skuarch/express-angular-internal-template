const env = require('./environments.json')[process.env.ENVIRONMENT];

function getEnvironment() {
    if (!process.env.ENVIRONMENT) {
        throw new Error('ENVIRONMENT is undefinied, process.env.ENVIRONMENT:' + process.env.ENVIRONMENT);
    }

    if (!env) {
        throw new Error('ENVIRONMENT is undefinied or not exits, env: ' + env);
    } else {
        return env;
    }
}

module.exports = getEnvironment();
