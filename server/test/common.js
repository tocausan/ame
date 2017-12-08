let _ = require('lodash');

module.exports = {

  isString(item){
    return typeof item === 'string';
  },

  isNumber(item){
    return typeof item === 'number';
  },

  isBoolean(item){
    return typeof item === 'boolean';
  },

  isSymbol(item){
    return typeof item === 'symbol';
  },


  isUndefined(item){
    return typeof item === 'undefined';
  },


  isObject(item){
    return typeof item === 'object';
  },


  isFunction(item){
    return typeof item === 'function';
  },


  isArrayOfStrings(array){
    return array.every(item => {
      return typeof item === 'string';
    })
  },

  isArrayOfNumbers(array){
    return array.every(item => {
      return typeof item === 'number';
    })
  },

  isArrayOfObjects(array){
    return array.every(item => {
      return typeof item === 'object';
    })
  },

  isArrayOfFunctions(array){
    return array.every(item => {
      return typeof item === 'function';
    })
  },


};
