'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Clock = (function () {
  function Clock(hours, minutes) {
    _classCallCheck(this, Clock);

    this.mins = hours * 60 + (minutes || 0);
  }

  _createClass(Clock, [{
    key: 'plus',
    value: function plus(m) {
      this.mins = ((this.mins + m) % 1440 + 1440) % 1440;
      return this;
    }
  }, {
    key: 'minus',
    value: function minus(m) {
      return this.plus(-m);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return ('0' + (this.mins / 60 | 0)).slice(-2) + ':' + ('0' + this.mins % 60).slice(-2);
    }
  }, {
    key: 'equals',
    value: function equals(otherClock) {
      return this.mins === otherClock.mins;
    }
  }]);

  return Clock;
})();

exports['default'] = function (h, m) {
  return new Clock(h, m);
};

module.exports = exports['default'];