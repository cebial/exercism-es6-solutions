'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var sort = function sort(s) {
  return [].concat(_toConsumableArray(s.toLowerCase())).sort().join('');
};

exports['default'] = function (w) {
  return {
    matches: function matches() {
      var _ref;

      return (_ref = []).concat.apply(_ref, arguments).filter(function (v) {
        return sort(w) === sort(v) && w.toLowerCase() !== v.toLowerCase();
      });
    }
  };
};

module.exports = exports['default'];