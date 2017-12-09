let authServices = require('../services/auth'),
    errorRoutes = require('./errors');

module.exports = {

    login: function (req, res, next) {
        let credential = {
            username: req.body.username,
            password: req.body.password
        };

        if (!credential.username || !credential.password) return errorRoutes.error401_empty(req, res, next);
        authServices.authenticateCredential(credential).then((result) => {
            return res.json(result);
        }, () => {
            return errorRoutes.error401_invalid(req, res, next);
        });
    },

    signin: function (req, res, next) {
        let credential = {
            username: req.body.username,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };
        if (!credential.username || !credential.password || !credential.passwordConfirmation) return errorRoutes.error401_empty(req, res, next);
        if(credential.password !== credential.passwordConfirmation) return errorRoutes.error401_invalid(req, res, next);
        authServices.signin(credential).then((result) => {
            //if (!result) return errorRoutes.error401_invalid(req, res, next);
            return res.json(result);
        }, () => {
            return errorRoutes.error401_invalid(req, res, next);
        });
    }

};


