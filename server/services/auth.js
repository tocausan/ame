let config = require('../config'),
    databaseDataAccess = require('../data-access/database'),
    User = require('../models/User'),
    Password = require('../models/Password'),
    Token = require('../models/Token');

module.exports = {

    authenticateCredential: function (data) {
        return new Promise((resolve, reject) => {
            databaseDataAccess.findOne(config.database.collections.passwords, {username: data.username}).then(passwordResult => {
                if (!passwordResult) reject('invalid credentials');
                let password = new Password(passwordResult);
                password.passwordAttempt = data.password;
                password.comparePassword().then(compareResult => {
                    if (!compareResult) reject('invalid credentials');
                    let token = new Token(data);
                    databaseDataAccess.findOneAndUpdateOrInsert(config.database.collections.tokens, {username: data.username}, token).then(tokenResult => {
                        resolve(tokenResult);
                    }, err => {
                        reject(err);
                    });
                }, err => {
                    reject(err);
                });
            }, err => {
                reject(err);
            })
        });
    },

    signin: function (data) {
        return new Promise((resolve, reject) => {
            let user = new User(data);
            databaseDataAccess.insertOneIfNotExist(config.database.collections.users, {username: user.username}, user).then(() => {
                let password = new Password(data);
                password.password = null;
                databaseDataAccess.insertOneIfNotExist(config.database.collections.passwords, {username: password.username}, password).then(() => {
                    let token = new Token(data);
                    databaseDataAccess.insertOneIfNotExist(config.database.collections.tokens, {username: data.username}, token).then(tokenResult => {
                        resolve(tokenResult);
                    }, err => {
                        reject(err);
                    });
                }, err => {
                    reject(err);
                });
            }, err => {
                reject(err);
            });
        });
    }

};
