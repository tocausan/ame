let expect = require('chai').expect,
  moment = require('moment'),
  databaseDataAccess = require('../../data-access/database');


describe('database', function () {

  describe('isConnected', function () {
    it('should return a boolean and true', function () {
      databaseDataAccess.isConnected().then(result => {

        expect(result)
          .to.be.a('boolean')
          .to.equal(true)

      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('insertMany', function () {
    it('should return an object', function () {
      databaseDataAccess.insertMany('test', [{test: 'insertMany', date: moment().format()}]).then(result => {
        if (result) {
          expect(result)
            .to.be.a('array')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('insertOne', function () {
    it('should return an object', function () {
      databaseDataAccess.insertOne('test', {test: 'insertOne', date: moment().format()}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('insertOneIfNotExist', function () {
    it('should return an object', function () {
      databaseDataAccess.insertOneIfNotExist('test', {test: 'insertOneIfNotExist', date: moment().format()}, {test: 'insertOneIfNotExist', date: moment().format()}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('find', function () {
    it('should return an array', function () {
      databaseDataAccess.find('test').then(result => {
        expect(result)
          .to.be.a('array')

      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('findOne', function () {
    it('should return an object', function () {
      databaseDataAccess.findOne('test', {test: 'insertOne'}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('findOneAndUpdate', function () {
    it('should return an object', function () {
      databaseDataAccess.findOneAndUpdate('test', {test: 'insertOne'}, {test: 'findOneUpdate insertOne'}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('findOneAndUpdateOrInsert', function () {
    it('should return an object', function () {
      databaseDataAccess.findOneAndUpdateOrInsert('test', {test: 'findOneAndUpdateOrInsert'}, {test: 'findOneAndUpdateOrInsert insertOne'}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });

  describe('findOneAndDelete', function () {
    it('should return an object', function () {
      databaseDataAccess.findOneAndDelete('test', {test: 'insertMany'}).then(result => {
        if (result) {
          expect(result)
            .to.be.a('object')
        }
      }).catch((result) => {
        console.log(result);
      })
    });
  });


});

