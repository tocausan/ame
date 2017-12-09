let _ = require('lodash'),
    config = require('../config'),
    databaseDataAccess = require('../data-access/database'),
    User = require('../models/User'),
    Password = require('../models/Password');

module.exports = {

    insertOne: function (data) {
        return new Promise((resolve, reject) => {
            if (!data) reject('empty data');

            let user = new User(data);
            databaseDataAccess.insertOneIfNotExist(config.database.collections.users, {username: user.username}, user).then(result => {
                let password = new Password(data);
                password.hashPassword().then(() => {
                    if (result) databaseDataAccess.insertOneIfNotExist(config.database.collections.passwords, {username: password.username}, password).then(result => {
                        //console.log(result)
                        resolve(user);
                    }, err => {
                        console.log(err);
                    });
                });
            }, err => {
                console.log(err);
            });
        });
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
