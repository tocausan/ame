let config = require('../config'),
  databaseDataAccess = require('../data-access/database'),
  User = require('../models/User'),
  Password = require('../models/Password'),
  Token = require('../models/Token');

module.exports = {

  authenticateCredential: function (credential) {
    return databaseDataAccess.findOne(config.database.collections.users, credential).then(findResult => {
      if (findResult) {
        return new Token(findResult);
      }
    })
  }

};
