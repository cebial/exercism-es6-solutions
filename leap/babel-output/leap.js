"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports["default"] = function (y) {
  return !(y % 4) && y % 100 || !(y % 400);
};

module.exports = exports["default"];