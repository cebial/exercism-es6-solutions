'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (a, b, c) {
  return {
    kind: function kind() {
      if (!(a && b && c) || !(a + b >= c && a + c >= b && b + c >= a)) {
        throw new Error('Not a valid triangle.');
      }
      if (a === b && b === c) {
        return 'equilateral';
      }
      if (a !== b && a !== c && b !== c) {
        return 'scalene';
      }
      return 'isosceles';
    }
  };
};

module.exports = exports['default'];