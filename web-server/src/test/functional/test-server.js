const supertest = require('supertest');
const constants = require('../../model/logic/constants');
const endpoints = require('../../model/logic/endpoints');

describe('testing server', function() {
    let server;
    const time = 10000;
    this.timeout(time);
    beforeEach(function() {
        server = require('../../bin/www');
    });
    afterEach(function() {
        server.close();
        console.log('shutdown server');
    });
    it('testing /', function(done) {
        
        supertest(server)
            .get(endpoints.index)
            .timeout(time)
            .expect(constants.HTTP_OK)
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test 404', function(done) {
        supertest(server)
            .get('/this/path/doesnt/exits')
            .timeout(time)
            .expect(constants.HTTP_NOT_FOUND)
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test auth in profile', function(done) {
        supertest(server)
            .get(endpoints.profile)
            .timeout(time)
            .expect(constants.UNAUTHENTICATED)
            .end(function(err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test login without autorization code', function testLogin (done) {
        supertest(server)
            .get(endpoints.login)
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test login with expired code', function testExpiredCode (done) {
        supertest(server)
            .get('/login?code=dmG_CUlhjjkvtyHIzl93pwO2mYkz-VGVE8pgEynrlpXXbqKFXvflW-DHNjTGageq58ttTb7jG5UAAABm&state=')
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test login with invalid code', function testInvalidCode (done) {
        supertest(server)
            .get('/login?code=doG_CUlhjjkvtyHIzl93pwO2mif529rbfhgVGVE8pgEynrlpXXbqKFXvflW-DHNjTGageq58ttTb7jG5UAAABm&state=')
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test /error', function testError (done) {
        supertest(server)
            .get(endpoints.error)
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test /web', function testError (done) {
        supertest(server)
            .get(endpoints.ctx)
            .timeout(time)
            .expect(constants.HTTP_FOUND, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test /ping/error', function testError (done) {
        supertest(server)
            .get(endpoints.pingError)
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test /ping/error', function testError (done) {
        supertest(server)
            .get(endpoints.pingNoAuth)
            .timeout(time)
            .expect(constants.HTTP_INTERNAL_SERVER_ERROR, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
    it('test /app/no/auth', function testError (done) {
        supertest(server)
            .get(endpoints.appNoAuth)
            .timeout(time)
            .expect(constants.UNAUTHENTICATED, done)
            .end(function (err, res) {
                if (err) {
                    done(err);
                } else {
                    done();
                }
            });
    });
});