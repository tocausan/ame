let jwt = require('jwt-simple'),
    moment = require('moment'),
    _ = require('lodash'),
    config = require('../config/index'),
    databaseDataAccess = require('../data-access/database');


module.exports = class {

    constructor(data) {
        !_.isNil(data) && !_.isNil(data.username) ? this.generate(data) : null;
    }
    
    generate(data) {
        this.username = data.username;
        this.token = jwt.encode({exp: this.expires}, config.token.secret);
        this.creation = moment.utc().format();
        this.expiration = moment.utc().add(config.token.expiration, 'days').format();

        let filter = {username: this.username};
        return databaseDataAccess.findOneAndUpdate(config.database.collections.tokens, filter, this);
    }

};
