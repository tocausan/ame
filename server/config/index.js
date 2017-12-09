/** config **/

module.exports = {

  database: {
    path: 'mongodb://127.0.0.1:27017/ame',
    collections: {
      test: 'test',
      users: 'users',
      passwords: 'passwords',
      tokens: 'tokens'
    }
  },

  token: {
    secret: 'top-secret-token',
    expiration: 7
  }

};
