"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (s) {
  return { isPangram: function isPangram() {
      return new Set(s.toLowerCase().match(/[a-z]/g)).size == 26;
    }
  };
};

module.exports = exports["default"];