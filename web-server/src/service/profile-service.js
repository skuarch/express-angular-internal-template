module.exports.getProfile = (req) => {

    return new Promise((resolve, reject) => {
        if(!req) {
            reject(new Error('req is undefinied'));
        }

        const token = req.session.token;

        if(!token) {
            reject(new Error('token is undefinied'));
        }

        let profile = {
            prid: token.sub,
            designation: token.designation,
            email: token.email,
            userPrincipalName: token.userPrincipalName,
            familyName: token.family_name,
            givenName: token.given_name,
            lastUpdate: new Date()
        };

        // req.session.profile = profile;
        resolve(profile);

    });

};