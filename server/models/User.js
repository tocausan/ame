let enums = require('../enums'),
    _ = require('lodash');

module.exports = class User {

  constructor(data) {
    this.username = !_.isNil(data) && !_.isNil(data.username) ? data.username : '';
    this.firstname = !_.isNil(data) && !_.isNil(data.firstname) ? data.firstname : '';
    this.lastname = !_.isNil(data) && !_.isNil(data.lastname) ? data.lastname : '';
    this.birthday = !_.isNil(data) && !_.isNil(data.birthday) ? data.birthday : '';
    this.address = !_.isNil(data) && !_.isNil(data.address) ? data.address : '';
    this.picture = !_.isNil(data) && !_.isNil(data.picture) ? data.picture : '';
    this.language = !_.isNil(data) && !_.isNil(data.language) ? data.language : enums.language.EN_US;
    this.role = !_.isNil(data) && !_.isNil(data.role) ? data.role : enums.userRole.PUBLIC;
  }

};
