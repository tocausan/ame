let config = require('../config'),
  databaseDataAccess = require('../data-access/database');

module.exports = {

  insertOne: function (data) {
    return databaseDataAccess.insertOne(config.database.collections.users, data);
  },

  findAll: function(){
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
