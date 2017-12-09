let usersServices = require('../services/users'),
    errorRoutes = require('./errors');

module.exports = {

    createUser: function (res, req, next) {
        return usersServices.insertOne(req.req.body);
    },

    getUsers: function (res, req, next) {
        return usersServices.findAll().then(result => {
            res.res.json(result);
        }, () => {
            return errorRoutes.error500(req, res, next);
        });
    },

    getUser: function (res, req, next) {
        return usersServices.findOneByUsername(req.req.params.username).then(result => {
            res.res.json(result);
        }, () => {
            return errorRoutes.error500(req, res, next);
        });
    },

    updateUser: function (res, req, next) {
        return  usersServices.findOneAndUpdateByUsername(req.req.params.username, req.req.body).then(result => {
            res.res.json(result);
        }, () => {
            return errorRoutes.error500(req, res, next);
        });
    },

    deleteUser: function (res, req, next) {
        return  usersServices.findOneAndDeleteByUsername(req.req.params.username).then(result => {
            res.res.json(result);
        }, () => {
            return errorRoutes.error500(req, res, next);
        });
    }

};
