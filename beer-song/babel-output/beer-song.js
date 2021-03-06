'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var thisMany = function thisMany(n) {
  return n || 'no more';
};
var bottles = function bottles(n) {
  return 'bottle' + (n - 1 ? 's' : '');
};
var one = function one(n) {
  return n ? 'one' : 'it';
};

var song = [].concat(_toConsumableArray(Array(100))).map(function (_, x) {
  // const song = Array.from(Array(100), (_, x) => {
  var y = x ? x - 1 : 99;

  return (thisMany(x) + ' ' + bottles(x) + ' of beer on the wall, ' + (thisMany(x) + ' ' + bottles(x) + ' of beer.\n') + (x ? 'Take ' + one(y) + ' down and pass it around, ' : 'Go to the store and buy some more, ') + (thisMany(y) + ' ' + bottles(y) + ' of beer on the wall.\n')).replace(/^n/, 'N'); // is there a cleaner way?
});

exports['default'] = {
  verse: function verse(n) {
    return song[n];
  },
  sing: function sing() {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
    var b = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    return song.slice(b, a + 1).reverse().join('\n');
  }
};
module.exports = exports['default'];