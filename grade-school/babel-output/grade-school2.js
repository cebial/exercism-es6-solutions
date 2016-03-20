"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _default = (function () {
  function _default() {
    _classCallCheck(this, _default);

    this._roster = {};
  }

  _createClass(_default, [{
    key: "roster",
    value: function roster() {
      return JSON.parse(JSON.stringify(this._roster));
    }
  }, {
    key: "grade",
    value: function grade(_grade) {
      return this._roster[_grade] || [];
    }
  }, {
    key: "add",
    value: function add(name, grade) {
      this._roster[grade] || (this._roster[grade] = []);
      this._roster[grade].push(name);
      this._roster[grade].sort();
    }
  }]);

  return _default;
})();

exports["default"] = _default;
module.exports = exports["default"];