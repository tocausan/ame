var chai = require('chai');

__coverage__ = {
  'a': 0
};
__coverage__['a']++


describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      var result = 1;
      __coverage__['akk']++

      chai.assert.equal(result, 1);
      chai.assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

