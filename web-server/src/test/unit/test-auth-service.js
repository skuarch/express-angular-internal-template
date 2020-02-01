const chai = require('chai');
chai.use(require('chai-as-promised'));

describe('testing auth service', () => {

    const authService = require('../../service/auth-service');

    it('test getCodeParam, missing req parameter', (done) => {
        chai.expect(authService.getCodeParam).to.throw('req is undefinied');
        done();
    });

});