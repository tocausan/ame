let authServices = require('../services/auth'),
    errorRoutes = require('./errors');

module.exports = {

    /** login **/
    login: function (req, res, next) {
        let credential = {
            username: req.body.username,
            password: req.body.password
        };

        if (credential.username && credential.password) {
            authServices.authenticateCredential(credential).then((result) => {
                if (result) {
                    return res.json(result);
                } else {
                    return errorRoutes.error401_invalid(req, res, next);
                }
            });
        } else {
            return errorRoutes.error401_empty(req, res, next);
        }
    },

    signin: function (req, res, next) {

    }

};


