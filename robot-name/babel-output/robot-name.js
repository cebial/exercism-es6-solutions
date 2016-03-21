'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var getRand = function getRand(x) {
  return Math.floor(Math.random() * x);
};
var genChar = function genChar() {
  return String.fromCharCode(getRand(26) + 65);
};
var genName = function genName() {
  return genChar() + genChar() + ('00' + getRand(1000)).slice(-3);
};
var usedNames = new Set();

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);

    this.reset();
  }

  _createClass(_default, [{
    key: 'reset',
    value: function reset() {
      while (usedNames.has(this._name = genName()));
      usedNames.add(this._name);
    }
  }, {
    key: 'name',
    get: function get() {
      return this._name;
    }
  }]);

  return _default;
})();

exports['default'] = _default;
module.exports = exports['default'];