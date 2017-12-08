let crypto = require('crypto'),
  bcrypt = require('bcrypt');

module.exports = class Password {

  constructor(data) {
    this.username = data.username ? data.username : '';
    this.salt = this.generateSalt(16);
    this.password = data.password ? this.hashPassword(this.salt, data.password) : '';
  };

  generateSalt (length) {
    return crypto.randomBytes(Math.ceil(length / 2))
      .toString('hex')
      .slice(0, length);
  };

  sha512Password(salt, password) {
    let hash = crypto.createHmac('sha512', salt);
    hash.update(password);
    return hash.digest('hex');
  };

  static comparePassword(password) {
    let hash = bcrypt.hashSync(password);
    return bcrypt.compareSync(password, hash);
  };

};
