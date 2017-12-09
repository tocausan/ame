let _ = require('lodash'),
    config = require('../config'),
    databaseDataAccess = require('../data-access/database'),
    User = require('../models/User'),
    Password = require('../models/Password');

module.exports = {

    insertOne: function (data) {
        console.log(data);
        console.log(0);
        if (data) {
            console.log(1);
            let user = new User(data);
            databaseDataAccess.insertOneIfNotExist(config.database.collections.users, {username: user.username}, user).then(result => {
                console.log(2);
                let password = new Password(data);
                password.hashPassword().then(() => {
                    console.log(3);
                    if (result) databaseDataAccess.insertOneIfNotExist(config.database.collections.passwords, {username: password.username}, password).then(result => {
                        console.log(4);
                        //console.log(result)
                        return user;
                    }, err => {
                        console.log(err);
                    });
                });
            }, err => {
                console.log(err);
            });
        }
    },

    findAll: function () {
        return databaseDataAccess.find(config.database.collections.users);
    },

    findOneByUsername: function (username) {
        return databaseDataAccess.findOne(config.database.collections.users, {username: username})
    },

    findOneAndUpdateByUsername: function (username, update) {
        return databaseDataAccess.findOneAndUpdate(config.database.collections.users, {username: username}, update);
    },

    findOneAndDeleteByUsername: function (username) {
        return databaseDataAccess.findOneAndDelete(config.database.collections.users, {username: username});
    }

};
