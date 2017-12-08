/** token model **/

let jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('../config/index'),
  databaseDataAccess = require('../data-access/database');


module.exports = class {

    constructor(data) {
        data && data.username ? this.generate(data) : console.log('invalid creadential');
    }

    generate(data) {
        this.username = data.username;
        this.token = jwt.encode({exp: this.expires}, config.token.secret);
        this.creation = moment.utc().format();
        this.expiration = moment.utc().add(config.token.expiration, 'days').format();

        let filter = {username: this.username};
        return databaseDataAccess.findOneUpdate(config.database.collections.token, filter, this);
    }

};
