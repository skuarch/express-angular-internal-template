const chai = require('chai');
chai.use(require('chai-as-promised'));

describe('testing environment', () => {

    const environment = require('../../environment');

    it('test getEnvironment()', (done) => {
    	chai.expect(environment.getEnvironment).to.not.equal(null);
        done();
    });

    it('test getEnvironment() 2', (done) => {
        chai.expect(environment.getEnvironment).to.not.be.null;
        done();
    });

    it('test process.env.ENVIRONMENT', (done) => {
    	process.env.ENVIRONMENT = null;
        chai.expect(environment.getEnvironment).to.not.be.null;
        done();
    });

});