let userServices = require('../services/user');

module.exports = {

    createUser: function (res, req, next) {
        return userServices.insertOne(req.body);
    },

    getUsers: function (res, req, next) {
        return userServices.findAll();
    },

    getUser: function (res, req, next) {
        return userServices.findOneByUsername(req.params.username);
    },

    updateUser: function (res, req, next) {
        return userServices.findOneAndUpdateByUsername(req.params.username, req.body);
    },

    deleteUser: function (res, req, next) {
        return userServices.findOneAndDeleteByUsername(req.params.username);
    }

};
