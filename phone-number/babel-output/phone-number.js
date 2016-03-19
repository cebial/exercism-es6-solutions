'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (number) {
  var n = number.replace(/\D/g, '');
  if (n.length === 11 && n[0] === '1') {
    n = n.slice(1);
  }
  if (n.length !== 10) n = '0000000000';

  return {
    number: function number() {
      return n;
    },
    areaCode: function areaCode() {
      return n.slice(0, 3);
    },
    toString: function toString() {
      return '(' + n.slice(0, 3) + ') ' + n.slice(3, 6) + '-' + n.slice(6);
    }
  };
};

module.exports = exports['default'];