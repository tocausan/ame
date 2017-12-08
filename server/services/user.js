let config = require('../config'),
  databaseDataAccess = require('../data-access/database');

module.exports = {

  getAll: function(){
    return databaseDataAccess.findAll(config.database.collections.users);
  },

  getOneByUsername: function (username) {
    return databaseDataAccess.findOne(config.database.collections.users, {username: username})
  },

  getOneUpdateByUsername: function (username, update) {
    return databaseDataAccess.findOneUpdate(config.database.collections.users, {username: username}, update);
  },

  getOneDeleteByUsername: function (username) {
    return databaseDataAccess.findOneDelete(config.database.collections.users, {username: username});
  },

  addOne: function (data) {
    return databaseDataAccess.insertOne(config.database.collections.users, data);
  }

};
