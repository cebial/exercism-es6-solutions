'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var orbs = {
  Earth: 1,
  Mercury: 0.2408467,
  Venus: 0.61519726,
  Mars: 1.8808158,
  Jupiter: 11.862615,
  Saturn: 29.447498,
  Uranus: 84.016846,
  Neptune: 164.79132
};

exports['default'] = function (seconds) {
  return Object.keys(orbs).reduce(function (age, orb) {
    return age['on' + orb] = function () {
      return +(seconds / (31557600 * orbs[orb])).toFixed(2);
    }, age;
  }, { seconds: seconds });
};

module.exports = exports['default'];