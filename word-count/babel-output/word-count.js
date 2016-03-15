"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    return { count: function count(s) {
            return s.match(/\S+/g).reduce(function (wc, w) {
                return wc[w] = ++wc[w] || 1, wc;
            }, {});
        } };
};

module.exports = exports["default"];