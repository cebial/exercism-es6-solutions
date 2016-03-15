"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (d) {
  return { date: function date() {
      return Date(+d + 1e12);
    } };
};

module.exports = exports["default"];