const chai = require('chai');
chai.use(require('chai-as-promised'));

describe('testing profile service', () => {

    const profileService = require('../../service/profile-service');

    it('test getProfile, missing req parameter', (done) => {
        const profile = profileService.getProfile();
        chai.expect(profile).to.eventually.rejected.then((error) => {
            chai.expect(error.message).to.equals('req is undefinied');
        });
        done();
    });

    it('test getProfile throws an error, missing req parameter', (done) => {
        const profile = profileService.getProfile();
        chai.assert(profile, Error);
        done();
    });

    it('test getProfile throws an error, missing req parameter, expect', (done) => {
        const profile = profileService.getProfile();
        chai.expect(profile).to.eventually.rejectedWith(Error, 'req is undefinied');
        done();
    });

});