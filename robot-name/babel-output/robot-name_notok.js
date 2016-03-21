'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var usedNames = new Set();
var getRand = function getRand(x) {
  return Math.floor(Math.random() * x);
};
var genChar = function genChar() {
  return String.fromCharCode(getRand(26) + 65);
};
var genName = function genName() {
  return genChar() + genChar() + ('00' + getRand(1000)).slice(-3);
};

exports['default'] = function () {
  var name = undefined;
  var reset = function reset() {
    while (usedNames.has(name = genName()));usedNames.add(name);
  };
  reset();
  return Object.freeze({ name: name, reset: reset });
};

module.exports = exports['default'];