let userRoleEnums = require('../enums/user-role'),
  languageEnums = require('../enums/language');

module.exports = class User {

  constructor(data) {
    this.username = data.username ? data.username : '';
    this.picture = data.picture ? data.picture : '';
    this.firstname = data.firstname ? data.firstname : '';
    this.lastname = data.lastname ? data.lastname : '';
    this.birthday = data.birthday ? data.birthday : '';
    this.address = data.address ? data.address : '';
    this.language = data.language ? data.language : languageEnums.EN_US;
    this.role = data.role ? data.role : userRoleEnums.PUBLIC;
  }

};
