'use strict';

Object.defineProperty(exports, '__esModule', {
      value: true
});
exports['default'] = anagram;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function anagram(word) {
      /* eslint one-var: 0, indent: 0, one-var-declaration-per-line: 0 */
      var clean = function clean(s) {
            return s.toLowerCase();
      },
          sort = function sort(s) {
            return [].concat(_toConsumableArray(s)).sort().join('');
      },
          cleaned = clean(word),
          sorted = sort(cleaned),
          check = function check(s) {
            return sorted === sort(clean(s)) && cleaned !== clean(s);
      };

      return { matches: function matches() {
                  var _ref;

                  return (_ref = []).concat.apply(_ref, arguments).filter(check);
            } };
}

module.exports = exports['default'];