'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var sort = function sort(w) {
  return [].concat(_toConsumableArray(w.toLowerCase())).sort().join('');
};
var equal = function equal(a, b) {
  return a.toLowerCase() == b.toLowerCase();
};

exports['default'] = function (word) {
  return {
    matches: function matches() {
      for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
        list[_key] = arguments[_key];
      }

      var re = new RegExp('^' + sort(word) + '$', 'i');
      return [].concat.apply([], list).filter(function (val) {
        return !equal(val, word) && re.test(sort(val));
      });
    }
  };
};

// console.log(re, sort(val), re.test(sort(val)));
module.exports = exports['default'];