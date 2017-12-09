let expect = require('chai').expect,
    userServices = require('../../services/user'),
    User = require('../../models/User');

let testUser = {
    username: 'test',
    password: 'test'
};

describe('users', function () {

    describe('insertOne', function () {
        it('should return an object', function () {

            userServices.insertOne(testUser).then(result => {
                if (result) {
                    expect(result)
                        .to.be.a('object')
                } else {
                    expect(result)
                        .to.be.null
                }
            }).catch(result => {
                console.log(result);
            });
        });
    });

    describe('findAll', function () {
        it('should return an array', function () {
            userServices.findAll().then(result => {
                if (result) {
                    expect(result)
                        .to.be.a('array')
                } else {
                    expect(result)
                        .to.be.null
                }
            }).catch(result => {
                console.log(result);
            });
        });
    });

    describe('findOneByUsername', function () {
        it('should return an object', function () {
            userServices.findOneByUsername('test').then(result => {
                if (result) {
                    expect(result)
                        .to.be.a('object')
                } else {
                    expect(result)
                        .to.be.null
                }
            }).catch(result => {
                console.log(result);
            });
        });
    });

    describe('findOneAndUpdateByUsername', function () {
        it('should return an object', function () {
            userServices.findOneAndUpdateByUsername('test', testUser).then(result => {
                if (result) {
                    expect(result)
                        .to.be.a('object')
                } else {
                    expect(result)
                        .to.be.null
                }
            }).catch(result => {
                console.log(result);
            });
        });
    });

    describe('findOneAndDeleteByUsername', function () {
        it('should return an object', function () {
            userServices.findOneAndDeleteByUsername('test', {username: 'test'}).then(result => {
                if (result) {
                    expect(result)
                        .to.be.a('object')
                } else {
                    expect(result)
                        .to.be.null
                }

            }).catch(result => {
                console.log(result);
            });
        });
    });

});

