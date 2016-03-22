// export default old => {
//   const scores = {};
//   for (const points in old) {
//     old[points].forEach(letter => scores[letter.toLowerCase()] = +points);
//   }
//   return scores;
// };

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (old) {
  return Object.keys(old).reduce(function (s, p) {
    return old[p].forEach(function (l) {
      return s[l.toLowerCase()] = +p;
    }), s;
  }, {});
};

module.exports = exports["default"];