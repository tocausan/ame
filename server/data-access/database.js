let mongoDb = require('mongodb'),
    config = require('../config');

module.exports = {

    isConnected: function () {
        return new Promise((resolve, reject) => {
            mongoDb.connect(config.database.path, (err, db) => {
                if (err) reject(false);
                resolve(true);
            });
        });
    },


    insertMany: function (collection, data) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).insertMany(data).then(result => {
                    resolve(data);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    insertOne: function (collection, data) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).insertOne(data).then(result => {
                    resolve(result);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    insertOneIfNotExist: function (collection, filter, data) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).findOne(filter).then(findResult => {
                    if (!findResult) {
                        db.collection(collection).insertOne(data).then(() => {
                            resolve(data);
                        }, error => {
                            reject(error);
                        });
                    } else {
                        reject({
                            error: 'data already exist',
                            data: data
                        });
                    }
                }, error => {
                    reject(error);
                });
            });
        });
    },

    find: function (collection) {
        return new Promise((resolve, reject) => {
            mongoDb.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).find().toArray((error, result) => {
                    if (error) reject(error);
                    resolve(result);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    findOne: function (collection, filter) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).findOne(filter).then(result => {
                    resolve(result);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    findOneAndUpdate: function (collection, filter, update) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).findOneAndUpdate(filter, {$set: update}).then(result => {
                    resolve(result);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    findOneAndUpdateOrInsert: function (collection, filter, update) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).findOneAndUpdate(filter, {$set: update}).then(result => {
                    if (result) {
                        resolve(update);
                    } else {
                        db.collection(collection).insertOne(update).then(() => {
                            resolve(update);
                        });
                    }
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    },

    findOneAndDelete: function (collection, filter) {
        return new Promise((resolve, reject) => {
            mongoDb.MongoClient.connect(config.database.path, (err, db) => {
                if (err) reject(err);
                db.collection(collection).findOneAndDelete(filter).then(result => {
                    resolve(result);
                    db.close();
                }, error => {
                    reject(error);
                });
            });
        });
    }

};

