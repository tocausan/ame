/** config **/

module.exports = {

  token: {
    secret: 'top-secret-token',
    expiration: 7
  },

  database: {
    path: 'mongodb://127.0.0.1:27017/tocausan',
    collections: {
      users: 'users'
    }
  }

};
