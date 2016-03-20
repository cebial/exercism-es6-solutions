"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function () {
  var _roster = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return {
    roster: function roster() {
      return JSON.parse(JSON.stringify(_roster));
    },
    grade: function grade(_grade) {
      return _roster[_grade] || [];
    },
    add: function add(name, grade) {
      /* eslint no-param-reassign: 0 */
      _roster[grade] = (_roster[grade] || []).concat(name).sort();
    }
  };
};

module.exports = exports["default"];