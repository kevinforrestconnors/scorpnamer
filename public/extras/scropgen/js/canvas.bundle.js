/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/points.js":
/*!**************************!*\
  !*** ./src/js/points.js ***!
  \**************************/
/***/ ((module) => {

var _POINTS;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var POINTS = (_POINTS = {
  eyes: [{
    x: 13,
    y: 13
  }, {
    x: 16,
    y: 13
  }],
  bg_blank: new Array(32 * 32).fill(0).map(function (p, index) {
    return {
      x: index % 32,
      y: Math.floor(index / 32)
    };
  }),
  bg_star: [{
    x: 8,
    y: 25
  }, {
    x: 9,
    y: 25
  }, {
    x: 8,
    y: 24
  }, {
    x: 9,
    y: 24
  }, {
    x: 10,
    y: 24
  }, {
    x: 11,
    y: 24
  }, {
    x: 9,
    y: 23
  }, {
    x: 10,
    y: 23
  }, {
    x: 11,
    y: 23
  }, {
    x: 12,
    y: 23
  }, {
    x: 13,
    y: 23
  }, {
    x: 9,
    y: 22
  }, {
    x: 10,
    y: 22
  }, {
    x: 11,
    y: 22
  }, {
    x: 12,
    y: 22
  }, {
    x: 13,
    y: 22
  }, {
    x: 10,
    y: 21
  }, {
    x: 11,
    y: 21
  }, {
    x: 12,
    y: 21
  }, {
    x: 13,
    y: 21
  }, {
    x: 10,
    y: 20
  }, {
    x: 11,
    y: 20
  }, {
    x: 12,
    y: 20
  }, {
    x: 13,
    y: 20
  }, {
    x: 11,
    y: 19
  }, {
    x: 12,
    y: 19
  }, {
    x: 13,
    y: 19
  }, {
    x: 11,
    y: 18
  }, {
    x: 12,
    y: 18
  }, {
    x: 13,
    y: 18
  }, {
    x: 10,
    y: 17
  }, {
    x: 11,
    y: 17
  }, {
    x: 12,
    y: 17
  }, {
    x: 13,
    y: 17
  }, {
    x: 9,
    y: 16
  }, {
    x: 10,
    y: 16
  }, {
    x: 11,
    y: 16
  }, {
    x: 12,
    y: 16
  }, {
    x: 13,
    y: 16
  }, {
    x: 8,
    y: 15
  }, {
    x: 9,
    y: 15
  }, {
    x: 10,
    y: 15
  }, {
    x: 11,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 13,
    y: 15
  }, {
    x: 7,
    y: 14
  }, {
    x: 8,
    y: 14
  }, {
    x: 9,
    y: 14
  }, {
    x: 10,
    y: 14
  }, {
    x: 11,
    y: 14
  }, {
    x: 12,
    y: 14
  }, {
    x: 13,
    y: 14
  }, {
    x: 13,
    y: 11
  }, {
    x: 13,
    y: 12
  }, {
    x: 6,
    y: 13
  }, {
    x: 7,
    y: 13
  }, {
    x: 8,
    y: 13
  }, {
    x: 9,
    y: 13
  }, {
    x: 10,
    y: 13
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }, {
    x: 13,
    y: 13
  }, {
    x: 15,
    y: 7
  }, {
    x: 15,
    y: 8
  }, {
    x: 15,
    y: 9
  }, {
    x: 15,
    y: 10
  }, {
    x: 15,
    y: 11
  }, {
    x: 15,
    y: 12
  }, {
    x: 15,
    y: 13
  }, {
    x: 15,
    y: 14
  }, {
    x: 15,
    y: 15
  }, {
    x: 15,
    y: 16
  }, {
    x: 15,
    y: 17
  }, {
    x: 15,
    y: 18
  }, {
    x: 15,
    y: 19
  }, {
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 14,
    y: 9
  }, {
    x: 14,
    y: 10
  }, {
    x: 14,
    y: 11
  }, {
    x: 14,
    y: 12
  }, {
    x: 14,
    y: 13
  }, {
    x: 14,
    y: 14
  }, {
    x: 14,
    y: 15
  }, {
    x: 14,
    y: 16
  }, {
    x: 14,
    y: 17
  }, {
    x: 14,
    y: 18
  }, {
    x: 14,
    y: 19
  }, {
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }],
  bg_frame: new Array(24 * 24).fill(0).map(function (p, index) {
    return {
      x: index % 24 + 4,
      y: Math.floor(index / 24) + 4
    };
  }),
  bg_square: new Array(18 * 18).fill(0).map(function (p, index) {
    return {
      x: index % 18 + 7,
      y: Math.floor(index / 18) + 7
    };
  }),
  bg_circle: [{
    x: 13,
    y: 6
  }, {
    x: 14,
    y: 6
  }, {
    x: 15,
    y: 6
  }, {
    x: 11,
    y: 7
  }, {
    x: 12,
    y: 7
  }, {
    x: 13,
    y: 7
  }, {
    x: 14,
    y: 7
  }, {
    x: 15,
    y: 7
  }, {
    x: 10,
    y: 8
  }, {
    x: 11,
    y: 8
  }, {
    x: 12,
    y: 8
  }, {
    x: 13,
    y: 8
  }, {
    x: 14,
    y: 8
  }, {
    x: 15,
    y: 8
  }, {
    x: 9,
    y: 9
  }, {
    x: 10,
    y: 9
  }, {
    x: 11,
    y: 9
  }, {
    x: 11,
    y: 9
  }, {
    x: 12,
    y: 9
  }, {
    x: 13,
    y: 9
  }, {
    x: 14,
    y: 9
  }, {
    x: 15,
    y: 9
  }, {
    x: 8,
    y: 10
  }, {
    x: 9,
    y: 10
  }, {
    x: 10,
    y: 10
  }, {
    x: 11,
    y: 10
  }, {
    x: 12,
    y: 10
  }, {
    x: 13,
    y: 10
  }, {
    x: 14,
    y: 10
  }, {
    x: 15,
    y: 10
  }, {
    x: 7,
    y: 11
  }, {
    x: 8,
    y: 11
  }, {
    x: 9,
    y: 11
  }, {
    x: 10,
    y: 11
  }, {
    x: 11,
    y: 11
  }, {
    x: 12,
    y: 11
  }, {
    x: 13,
    y: 11
  }, {
    x: 14,
    y: 11
  }, {
    x: 15,
    y: 11
  }, {
    x: 7,
    y: 12
  }, {
    x: 8,
    y: 12
  }, {
    x: 9,
    y: 12
  }, {
    x: 10,
    y: 12
  }, {
    x: 11,
    y: 12
  }, {
    x: 12,
    y: 12
  }, {
    x: 13,
    y: 12
  }, {
    x: 14,
    y: 12
  }, {
    x: 15,
    y: 12
  }, {
    x: 6,
    y: 13
  }, {
    x: 7,
    y: 13
  }, {
    x: 8,
    y: 13
  }, {
    x: 9,
    y: 13
  }, {
    x: 10,
    y: 13
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }, {
    x: 13,
    y: 13
  }, {
    x: 14,
    y: 13
  }, {
    x: 15,
    y: 13
  }, {
    x: 6,
    y: 14
  }, {
    x: 7,
    y: 14
  }, {
    x: 8,
    y: 14
  }, {
    x: 9,
    y: 14
  }, {
    x: 10,
    y: 14
  }, {
    x: 11,
    y: 14
  }, {
    x: 12,
    y: 14
  }, {
    x: 13,
    y: 14
  }, {
    x: 14,
    y: 14
  }, {
    x: 15,
    y: 14
  }, {
    x: 6,
    y: 15
  }, {
    x: 7,
    y: 15
  }, {
    x: 8,
    y: 15
  }, {
    x: 9,
    y: 15
  }, {
    x: 10,
    y: 15
  }, {
    x: 11,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 13,
    y: 15
  }, {
    x: 14,
    y: 15
  }, {
    x: 15,
    y: 15
  }],
  regular_left_claw: [{
    x: 10,
    y: 13
  }, {
    x: 8,
    y: 9
  }, {
    x: 10,
    y: 9
  }, {
    x: 8,
    y: 10
  }, {
    x: 9,
    y: 10
  }, {
    x: 10,
    y: 10
  }, {
    x: 9,
    y: 11
  }, {
    x: 10,
    y: 11
  }, {
    x: 10,
    y: 12
  }],
  regular_left_claw_accent: [{
    x: 8,
    y: 11
  }, {
    x: 8,
    y: 12
  }, {
    x: 9,
    y: 12
  }],
  regular_left_claw_outline: [{
    x: 8,
    y: 13
  }, {
    x: 9,
    y: 13
  }, {
    x: 9,
    y: 14
  }, {
    x: 7,
    y: 8
  }, {
    x: 7,
    y: 9
  }, {
    x: 7,
    y: 10
  }, {
    x: 7,
    y: 11
  }, {
    x: 7,
    y: 12
  }, {
    x: 11,
    y: 9
  }, {
    x: 11,
    y: 10
  }, {
    x: 11,
    y: 11
  }, {
    x: 11,
    y: 12
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }, {
    x: 9,
    y: 9
  }, {
    x: 8,
    y: 6
  }, {
    x: 8,
    y: 7
  }, {
    x: 8,
    y: 8
  }, {
    x: 10,
    y: 6
  }, {
    x: 10,
    y: 7
  }, {
    x: 10,
    y: 8
  }],
  big_left_claw: [{
    x: 6,
    y: 8
  }, {
    x: 7,
    y: 8
  }, {
    x: 7,
    y: 7
  }, {
    x: 11,
    y: 8
  }, {
    x: 7,
    y: 11
  }, {
    x: 8,
    y: 11
  }, {
    x: 9,
    y: 11
  }, {
    x: 10,
    y: 11
  }, {
    x: 6,
    y: 9
  }, {
    x: 7,
    y: 9
  }, {
    x: 8,
    y: 9
  }, {
    x: 9,
    y: 9
  }, {
    x: 10,
    y: 9
  }, {
    x: 11,
    y: 9
  }, {
    x: 6,
    y: 10
  }, {
    x: 7,
    y: 10
  }, {
    x: 8,
    y: 10
  }, {
    x: 9,
    y: 10
  }, {
    x: 10,
    y: 10
  }, {
    x: 11,
    y: 10
  }, {
    x: 10,
    y: 13
  }],
  big_left_claw_accent: [{
    x: 6,
    y: 11
  }, {
    x: 11,
    y: 11
  }, {
    x: 7,
    y: 12
  }, {
    x: 8,
    y: 12
  }, {
    x: 9,
    y: 12
  }, {
    x: 10,
    y: 12
  }, {
    x: 9,
    y: 13
  }],
  big_left_claw_outline: [{
    x: 7,
    y: 13
  }, {
    x: 8,
    y: 13
  }, {
    x: 6,
    y: 12
  }, {
    x: 5,
    y: 8
  }, {
    x: 5,
    y: 9
  }, {
    x: 5,
    y: 10
  }, {
    x: 5,
    y: 11
  }, {
    x: 6,
    y: 7
  }, {
    x: 7,
    y: 6
  }, {
    x: 8,
    y: 5
  }, {
    x: 8,
    y: 6
  }, {
    x: 8,
    y: 7
  }, {
    x: 8,
    y: 8
  }, {
    x: 9,
    y: 8
  }, {
    x: 10,
    y: 5
  }, {
    x: 10,
    y: 6
  }, {
    x: 10,
    y: 7
  }, {
    x: 10,
    y: 8
  }, {
    x: 9,
    y: 14
  }, {
    x: 11,
    y: 7
  }, {
    x: 12,
    y: 8
  }, {
    x: 12,
    y: 9
  }, {
    x: 12,
    y: 10
  }, {
    x: 12,
    y: 11
  }, {
    x: 11,
    y: 12
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }],
  missing_left_claw: [{
    x: 10,
    y: 12
  }, {
    x: 10,
    y: 13
  }],
  missing_left_claw_accent: [],
  missing_left_claw_outline: [{
    x: 10,
    y: 11
  }, {
    x: 9,
    y: 12
  }, {
    x: 9,
    y: 13
  }, {
    x: 9,
    y: 14
  }, {
    x: 11,
    y: 12
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }],
  scissors_left_claw: [{
    x: 6,
    y: 7
  }, {
    x: 7,
    y: 8
  }, {
    x: 8,
    y: 9
  }, {
    x: 9,
    y: 10
  }, {
    x: 12,
    y: 7
  }, {
    x: 11,
    y: 8
  }, {
    x: 10,
    y: 9
  }, {
    x: 9,
    y: 11
  }, {
    x: 9,
    y: 12
  }, {
    x: 10,
    y: 13
  }],
  scissors_left_claw_accent: [{
    x: 9,
    y: 13
  }, {
    x: 6,
    y: 8
  }, {
    x: 7,
    y: 9
  }, {
    x: 8,
    y: 10
  }, {
    x: 12,
    y: 8
  }, {
    x: 11,
    y: 9
  }, {
    x: 10,
    y: 10
  }],
  scissors_left_claw_outline: [{
    x: 6,
    y: 6
  }, {
    x: 7,
    y: 7
  }, {
    x: 8,
    y: 8
  }, {
    x: 9,
    y: 9
  }, {
    x: 12,
    y: 6
  }, {
    x: 11,
    y: 7
  }, {
    x: 10,
    y: 8
  }, {
    x: 5,
    y: 6
  }, {
    x: 5,
    y: 7
  }, {
    x: 5,
    y: 8
  }, {
    x: 13,
    y: 6
  }, {
    x: 13,
    y: 7
  }, {
    x: 13,
    y: 8
  }, {
    x: 6,
    y: 9
  }, {
    x: 12,
    y: 9
  }, {
    x: 7,
    y: 10
  }, {
    x: 11,
    y: 10
  }, {
    x: 8,
    y: 11
  }, {
    x: 8,
    y: 12
  }, {
    x: 8,
    y: 13
  }, {
    x: 10,
    y: 11
  }, {
    x: 10,
    y: 12
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }, {
    x: 9,
    y: 14
  }],
  ball_left_claw: [],
  ball_left_claw_accent: [{
    x: 9,
    y: 12
  }, {
    x: 10,
    y: 13
  }],
  ball_left_claw_outline: [{
    x: 8,
    y: 7
  }, {
    x: 9,
    y: 7
  }, {
    x: 10,
    y: 7
  }, {
    x: 7,
    y: 8
  }, {
    x: 8,
    y: 8
  }, {
    x: 9,
    y: 8
  }, {
    x: 10,
    y: 8
  }, {
    x: 11,
    y: 8
  }, {
    x: 7,
    y: 9
  }, {
    x: 8,
    y: 9
  }, {
    x: 9,
    y: 9
  }, {
    x: 10,
    y: 9
  }, {
    x: 11,
    y: 9
  }, {
    x: 7,
    y: 10
  }, {
    x: 8,
    y: 10
  }, {
    x: 9,
    y: 10
  }, {
    x: 10,
    y: 10
  }, {
    x: 11,
    y: 10
  }, {
    x: 8,
    y: 11
  }, {
    x: 9,
    y: 11
  }, {
    x: 10,
    y: 11
  }, {
    x: 8,
    y: 12
  }, {
    x: 10,
    y: 12
  }, {
    x: 9,
    y: 13
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }, {
    x: 9,
    y: 13
  }, {
    x: 9,
    y: 14
  }],
  ball_left_highlight: [{
    x: 8,
    y: 8
  }],
  ball_right_highlight: [{
    x: 19,
    y: 8
  }],
  mushroom_left_claw: [{
    x: 9,
    y: 7
  }, {
    x: 9,
    y: 8
  }, {
    x: 9,
    y: 9
  }, {
    x: 8,
    y: 9
  }, {
    x: 10,
    y: 9
  }, {
    x: 10,
    y: 13
  }, {
    x: 9,
    y: 12
  }],
  mushroom_left_claw_accent: [{
    x: 9,
    y: 11
  }, {
    x: 7,
    y: 9
  }, {
    x: 11,
    y: 9
  }, {
    x: 8,
    y: 7
  }, {
    x: 8,
    y: 8
  }, {
    x: 10,
    y: 7
  }, {
    x: 10,
    y: 8
  }],
  mushroom_left_claw_outline: [{
    x: 8,
    y: 6
  }, {
    x: 9,
    y: 6
  }, {
    x: 10,
    y: 6
  }, {
    x: 7,
    y: 7
  }, {
    x: 11,
    y: 7
  }, {
    x: 7,
    y: 8
  }, {
    x: 11,
    y: 8
  }, {
    x: 6,
    y: 9
  }, {
    x: 12,
    y: 9
  }, {
    x: 6,
    y: 10
  }, {
    x: 7,
    y: 10
  }, {
    x: 8,
    y: 10
  }, {
    x: 9,
    y: 10
  }, {
    x: 10,
    y: 10
  }, {
    x: 11,
    y: 10
  }, {
    x: 12,
    y: 10
  }, {
    x: 8,
    y: 11
  }, {
    x: 8,
    y: 12
  }, {
    x: 8,
    y: 13
  }, {
    x: 9,
    y: 13
  }, {
    x: 9,
    y: 14
  }, {
    x: 10,
    y: 11
  }, {
    x: 10,
    y: 12
  }, {
    x: 11,
    y: 13
  }, {
    x: 12,
    y: 13
  }],
  core_primary: [{
    x: 14,
    y: 13
  }, {
    x: 13,
    y: 14
  }, {
    x: 14,
    y: 14
  }, {
    x: 14,
    y: 15
  }, {
    x: 14,
    y: 16
  }, {
    x: 14,
    y: 17
  }, {
    x: 14,
    y: 18
  }],
  core_accent: [{
    x: 13,
    y: 15
  }, {
    x: 13,
    y: 16
  }, {
    x: 13,
    y: 17
  }, {
    x: 13,
    y: 18
  }, {
    x: 13,
    y: 19
  }, {
    x: 14,
    y: 19
  }],
  head: [{
    x: 13,
    y: 12
  }, {
    x: 14,
    y: 12
  }, {
    x: 15,
    y: 12
  }, {
    x: 16,
    y: 12
  }, {
    x: 13,
    y: 11
  }, {
    x: 16,
    y: 11
  }],
  primary_core_legs_normal: [{
    x: 10,
    y: 16
  }, {
    x: 12,
    y: 16
  }, {
    x: 12,
    y: 18
  }, {
    x: 10,
    y: 19
  }, {
    x: 12,
    y: 20
  }, {
    x: 10,
    y: 21
  }, {
    x: 10,
    y: 14
  }, {
    x: 11,
    y: 14
  }],
  secondary_core_legs_normal: [{
    x: 11,
    y: 16
  }, {
    x: 11,
    y: 18
  }, {
    x: 11,
    y: 20
  }, {
    x: 12,
    y: 14
  }],
  legs_normal: [{
    x: 9,
    y: 14
  }, {
    x: 10,
    y: 15
  }, {
    x: 11,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 9,
    y: 16
  }, {
    x: 10,
    y: 17
  }, {
    x: 11,
    y: 17
  }, {
    x: 12,
    y: 17
  }, {
    x: 10,
    y: 18
  }, {
    x: 9,
    y: 19
  }, {
    x: 11,
    y: 19
  }, {
    x: 12,
    y: 19
  }, {
    x: 10,
    y: 20
  }, {
    x: 9,
    y: 21
  }, {
    x: 11,
    y: 21
  }, {
    x: 12,
    y: 21
  }, {
    x: 10,
    y: 22
  }, {
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }],
  primary_core_legs_insect: [{
    x: 10,
    y: 14
  }, {
    x: 11,
    y: 14
  }, {
    x: 12,
    y: 17
  }, {
    x: 12,
    y: 19
  }, {
    x: 10,
    y: 18
  }, {
    x: 10,
    y: 20
  }],
  secondary_core_legs_insect: [{
    x: 12,
    y: 14
  }, {
    x: 11,
    y: 17
  }, {
    x: 11,
    y: 19
  }],
  legs_insect: [{
    x: 10,
    y: 15
  }, {
    x: 11,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 11,
    y: 16
  }, {
    x: 12,
    y: 16
  }, {
    x: 10,
    y: 17
  }, {
    x: 9,
    y: 18
  }, {
    x: 11,
    y: 18
  }, {
    x: 12,
    y: 18
  }, {
    x: 10,
    y: 19
  }, {
    x: 9,
    y: 20
  }, {
    x: 11,
    y: 20
  }, {
    x: 12,
    y: 20
  }, {
    x: 10,
    y: 21
  }, {
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }],
  primary_core_legs_stubby: [{
    x: 11,
    y: 14
  }, {
    x: 12,
    y: 16
  }, {
    x: 12,
    y: 18
  }, {
    x: 12,
    y: 20
  }],
  secondary_core_legs_stubby: [{
    x: 10,
    y: 14
  }, {
    x: 12,
    y: 14
  }, {
    x: 13,
    y: 20
  }, {
    x: 11,
    y: 16
  }, {
    x: 11,
    y: 18
  }, {
    x: 11,
    y: 20
  }],
  legs_stubby: [{
    x: 11,
    y: 13
  }, {
    x: 10,
    y: 15
  }, {
    x: 10,
    y: 16
  }, {
    x: 10,
    y: 18
  }, {
    x: 10,
    y: 20
  }, {
    x: 11,
    y: 15
  }, {
    x: 11,
    y: 17
  }, {
    x: 11,
    y: 19
  }, {
    x: 11,
    y: 21
  }, {
    x: 12,
    y: 13
  }, {
    x: 12,
    y: 15
  }, {
    x: 12,
    y: 17
  }, {
    x: 12,
    y: 19
  }, {
    x: 12,
    y: 21
  }, {
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }],
  primary_core_legs_skinny: [{
    x: 11,
    y: 14
  }],
  secondary_core_legs_skinny: [{
    x: 12,
    y: 14
  }],
  legs_skinny: [{
    x: 10,
    y: 14
  }, {
    x: 11,
    y: 15
  }, {
    x: 12,
    y: 15
  }, {
    x: 10,
    y: 16
  }, {
    x: 11,
    y: 16
  }, {
    x: 12,
    y: 16
  }, {
    x: 9,
    y: 17
  }, {
    x: 9,
    y: 19
  }, {
    x: 10,
    y: 21
  }, {
    x: 10,
    y: 18
  }, {
    x: 11,
    y: 18
  }, {
    x: 11,
    y: 20
  }, {
    x: 12,
    y: 16
  }, {
    x: 12,
    y: 17
  }, {
    x: 12,
    y: 18
  }, {
    x: 12,
    y: 19
  }, {
    x: 12,
    y: 20
  }],
  missing_tail_primary: [{
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 15,
    y: 22
  }, {
    x: 16,
    y: 23
  }, {
    x: 17,
    y: 24
  }, {
    x: 19,
    y: 25
  }, {
    x: 20,
    y: 25
  }, {
    x: 21,
    y: 24
  }],
  missing_tail_accent: [{
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }, {
    x: 15,
    y: 23
  }, {
    x: 16,
    y: 24
  }, {
    x: 18,
    y: 25
  }],
  missing_tail_outline: [{
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }, {
    x: 16,
    y: 20
  }, {
    x: 16,
    y: 21
  }, {
    x: 16,
    y: 22
  }, {
    x: 14,
    y: 23
  }, {
    x: 17,
    y: 23
  }, {
    x: 21,
    y: 23
  }, {
    x: 15,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 18,
    y: 24
  }, {
    x: 19,
    y: 24
  }, {
    x: 20,
    y: 24
  }, {
    x: 22,
    y: 24
  }, {
    x: 16,
    y: 25
  }, {
    x: 17,
    y: 25
  }, {
    x: 21,
    y: 25
  }, {
    x: 18,
    y: 26
  }, {
    x: 19,
    y: 26
  }, {
    x: 20,
    y: 26
  }],
  normal_tail_primary: [{
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 15,
    y: 22
  }, {
    x: 16,
    y: 23
  }, {
    x: 17,
    y: 24
  }, {
    x: 19,
    y: 25
  }, {
    x: 20,
    y: 25
  }, {
    x: 21,
    y: 24
  }, {
    x: 22,
    y: 23
  }, {
    x: 23,
    y: 22
  }, {
    x: 23,
    y: 21
  }, {
    x: 23,
    y: 20
  }],
  normal_tail_accent: [{
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }, {
    x: 15,
    y: 23
  }, {
    x: 16,
    y: 24
  }, {
    x: 18,
    y: 25
  }, {
    x: 23,
    y: 23
  }],
  normal_tail_outline: [{
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }, {
    x: 16,
    y: 20
  }, {
    x: 16,
    y: 21
  }, {
    x: 16,
    y: 22
  }, {
    x: 14,
    y: 23
  }, {
    x: 17,
    y: 23
  }, {
    x: 21,
    y: 23
  }, {
    x: 15,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 18,
    y: 24
  }, {
    x: 19,
    y: 24
  }, {
    x: 20,
    y: 24
  }, {
    x: 22,
    y: 24
  }, {
    x: 16,
    y: 25
  }, {
    x: 17,
    y: 25
  }, {
    x: 21,
    y: 25
  }, {
    x: 18,
    y: 26
  }, {
    x: 19,
    y: 26
  }, {
    x: 20,
    y: 26
  }, {
    x: 22,
    y: 17
  }, {
    x: 22,
    y: 18
  }, {
    x: 22,
    y: 20
  }, {
    x: 22,
    y: 21
  }, {
    x: 22,
    y: 22
  }, {
    x: 23,
    y: 18
  }, {
    x: 23,
    y: 19
  }, {
    x: 24,
    y: 20
  }, {
    x: 24,
    y: 21
  }, {
    x: 24,
    y: 22
  }, {
    x: 24,
    y: 23
  }, {
    x: 24,
    y: 19
  }, {
    x: 23,
    y: 24
  }],
  syringe_tail_primary: [{
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 15,
    y: 22
  }, {
    x: 16,
    y: 23
  }, {
    x: 17,
    y: 24
  }, {
    x: 19,
    y: 25
  }, {
    x: 20,
    y: 25
  }, {
    x: 24,
    y: 18
  }, {
    x: 24,
    y: 19
  }, {
    x: 24,
    y: 20
  }],
  syringe_tail_accent: [{
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }, {
    x: 15,
    y: 23
  }, {
    x: 16,
    y: 24
  }, {
    x: 18,
    y: 25
  }, {
    x: 21,
    y: 25
  }, {
    x: 22,
    y: 24
  }, {
    x: 23,
    y: 23
  }],
  syringe_tail_outline: [{
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }, {
    x: 16,
    y: 20
  }, {
    x: 16,
    y: 21
  }, {
    x: 16,
    y: 22
  }, {
    x: 14,
    y: 23
  }, {
    x: 14,
    y: 23
  }, {
    x: 17,
    y: 23
  }, {
    x: 21,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 18,
    y: 24
  }, {
    x: 19,
    y: 24
  }, {
    x: 20,
    y: 24
  }, {
    x: 21,
    y: 24
  }, {
    x: 18,
    y: 26
  }, {
    x: 19,
    y: 26
  }, {
    x: 20,
    y: 26
  }, {
    x: 21,
    y: 26
  }, {
    x: 16,
    y: 25
  }, {
    x: 17,
    y: 25
  }, {
    x: 22,
    y: 25
  }, {
    x: 22,
    y: 23
  }, {
    x: 23,
    y: 24
  }, {
    x: 24,
    y: 14
  }, {
    x: 24,
    y: 15
  }, {
    x: 24,
    y: 16
  }, {
    x: 24,
    y: 17
  }, {
    x: 24,
    y: 22
  }, {
    x: 24,
    y: 23
  }, {
    x: 23,
    y: 17
  }, {
    x: 23,
    y: 18
  }, {
    x: 23,
    y: 19
  }, {
    x: 23,
    y: 20
  }, {
    x: 23,
    y: 21
  }, {
    x: 23,
    y: 22
  }, {
    x: 25,
    y: 17
  }, {
    x: 25,
    y: 18
  }, {
    x: 25,
    y: 19
  }, {
    x: 25,
    y: 20
  }, {
    x: 25,
    y: 21
  }, {
    x: 25,
    y: 22
  }],
  fat_tail_primary: [{
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 15,
    y: 22
  }, {
    x: 16,
    y: 23
  }, {
    x: 17,
    y: 24
  }, {
    x: 19,
    y: 25
  }, {
    x: 20,
    y: 25
  }, {
    x: 21,
    y: 24
  }, {
    x: 24,
    y: 19
  }, {
    x: 23,
    y: 20
  }, {
    x: 24,
    y: 20
  }, {
    x: 25,
    y: 20
  }, {
    x: 23,
    y: 21
  }, {
    x: 24,
    y: 21
  }, {
    x: 22,
    y: 23
  }, {
    x: 23,
    y: 22
  }],
  fat_tail_accent: [{
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }, {
    x: 15,
    y: 23
  }, {
    x: 16,
    y: 24
  }, {
    x: 18,
    y: 25
  }, {
    x: 23,
    y: 23
  }, {
    x: 24,
    y: 22
  }, {
    x: 25,
    y: 22
  }, {
    x: 25,
    y: 21
  }],
  fat_tail_outline: [{
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }, {
    x: 16,
    y: 20
  }, {
    x: 16,
    y: 21
  }, {
    x: 16,
    y: 22
  }, {
    x: 14,
    y: 23
  }, {
    x: 17,
    y: 23
  }, {
    x: 21,
    y: 23
  }, {
    x: 15,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 18,
    y: 24
  }, {
    x: 19,
    y: 24
  }, {
    x: 20,
    y: 24
  }, {
    x: 22,
    y: 24
  }, {
    x: 16,
    y: 25
  }, {
    x: 17,
    y: 25
  }, {
    x: 21,
    y: 25
  }, {
    x: 18,
    y: 26
  }, {
    x: 19,
    y: 26
  }, {
    x: 20,
    y: 26
  }, {
    x: 23,
    y: 24
  }, {
    x: 24,
    y: 23
  }, {
    x: 25,
    y: 23
  }, {
    x: 22,
    y: 20
  }, {
    x: 22,
    y: 21
  }, {
    x: 22,
    y: 22
  }, {
    x: 26,
    y: 20
  }, {
    x: 26,
    y: 21
  }, {
    x: 26,
    y: 22
  }, {
    x: 23,
    y: 19
  }, {
    x: 25,
    y: 19
  }, {
    x: 25,
    y: 18
  }, {
    x: 24,
    y: 18
  }, {
    x: 24,
    y: 17
  }, {
    x: 23,
    y: 16
  }],
  ball_tail_primary: [{
    x: 15,
    y: 20
  }, {
    x: 15,
    y: 21
  }, {
    x: 15,
    y: 22
  }, {
    x: 16,
    y: 23
  }, {
    x: 17,
    y: 24
  }, {
    x: 19,
    y: 25
  }, {
    x: 20,
    y: 25
  }, {
    x: 21,
    y: 24
  }],
  ball_tail_accent: [{
    x: 14,
    y: 20
  }, {
    x: 14,
    y: 21
  }, {
    x: 14,
    y: 22
  }, {
    x: 15,
    y: 23
  }, {
    x: 16,
    y: 24
  }, {
    x: 18,
    y: 25
  }],
  ball_tail_outline: [{
    x: 13,
    y: 20
  }, {
    x: 13,
    y: 21
  }, {
    x: 13,
    y: 22
  }, {
    x: 16,
    y: 20
  }, {
    x: 16,
    y: 21
  }, {
    x: 16,
    y: 22
  }, {
    x: 14,
    y: 23
  }, {
    x: 17,
    y: 23
  }, {
    x: 21,
    y: 23
  }, {
    x: 15,
    y: 24
  }, {
    x: 15,
    y: 24
  }, {
    x: 18,
    y: 24
  }, {
    x: 19,
    y: 24
  }, {
    x: 20,
    y: 24
  }, {
    x: 22,
    y: 24
  }, {
    x: 16,
    y: 25
  }, {
    x: 17,
    y: 25
  }, {
    x: 21,
    y: 25
  }, {
    x: 18,
    y: 26
  }, {
    x: 19,
    y: 26
  }, {
    x: 20,
    y: 26
  }, {
    x: 22,
    y: 21
  }, {
    x: 23,
    y: 21
  }, {
    x: 21,
    y: 22
  }, {
    x: 23,
    y: 22
  }, {
    x: 24,
    y: 22
  }, {
    x: 21,
    y: 23
  }, {
    x: 22,
    y: 23
  }, {
    x: 23,
    y: 23
  }, {
    x: 24,
    y: 23
  }, {
    x: 22,
    y: 24
  }, {
    x: 23,
    y: 24
  }],
  evil_eye_dark: [{
    x: 14,
    y: 15
  }, {
    x: 15,
    y: 15
  }, {
    x: 13,
    y: 16
  }, {
    x: 16,
    y: 16
  }, {
    x: 13,
    y: 18
  }, {
    x: 16,
    y: 18
  }, {
    x: 14,
    y: 19
  }, {
    x: 15,
    y: 19
  }],
  evil_eye_light: [{
    x: 14,
    y: 16
  }, {
    x: 14,
    y: 17
  }, {
    x: 15,
    y: 16
  }, {
    x: 15,
    y: 17
  }],
  evil_eye_white: [{
    x: 13,
    y: 17
  }, {
    x: 16,
    y: 17
  }, {
    x: 14,
    y: 18
  }, {
    x: 15,
    y: 18
  }],
  false_face_smile: [{
    x: 13,
    y: 15
  }, {
    x: 16,
    y: 15
  }, {
    x: 14,
    y: 16
  }, {
    x: 15,
    y: 16
  }],
  false_face_frown: [{
    x: 13,
    y: 16
  }, {
    x: 14,
    y: 15
  }, {
    x: 15,
    y: 15
  }, {
    x: 16,
    y: 16
  }],
  false_face_tepid: [{
    x: 14,
    y: 15
  }, {
    x: 15,
    y: 15
  }],
  halo: [{
    x: 12,
    y: 8
  }, {
    x: 17,
    y: 8
  }, {
    x: 13,
    y: 7
  }, {
    x: 14,
    y: 7
  }, {
    x: 15,
    y: 7
  }, {
    x: 16,
    y: 7
  }, {
    x: 13,
    y: 9
  }, {
    x: 14,
    y: 9
  }, {
    x: 15,
    y: 9
  }, {
    x: 16,
    y: 9
  }],
  match_stick: [{
    x: 6,
    y: 8
  }, {
    x: 7,
    y: 8
  }, {
    x: 8,
    y: 8
  }, {
    x: 9,
    y: 8
  }, {
    x: 11,
    y: 8
  }, {
    x: 12,
    y: 8
  }],
  match_tip: [{
    x: 13,
    y: 8
  }],
  match_box_strike: [{
    x: 16,
    y: 8
  }, {
    x: 17,
    y: 8
  }, {
    x: 18,
    y: 8
  }, {
    x: 20,
    y: 8
  }, {
    x: 21,
    y: 8
  }, {
    x: 22,
    y: 8
  }, {
    x: 23,
    y: 8
  }],
  match_box_outline: [{
    x: 16,
    y: 4
  }, {
    x: 16,
    y: 5
  }, {
    x: 16,
    y: 6
  }, {
    x: 16,
    y: 7
  }, {
    x: 17,
    y: 4
  }, {
    x: 18,
    y: 4
  }, {
    x: 19,
    y: 4
  }, {
    x: 20,
    y: 4
  }, {
    x: 21,
    y: 4
  }, {
    x: 22,
    y: 4
  }, {
    x: 23,
    y: 4
  }, {
    x: 23,
    y: 5
  }, {
    x: 23,
    y: 6
  }, {
    x: 23,
    y: 7
  }, {
    x: 23,
    y: 8
  }],
  match_box_body: [{
    x: 17,
    y: 5
  }, {
    x: 18,
    y: 5
  }, {
    x: 19,
    y: 5
  }, {
    x: 20,
    y: 5
  }, {
    x: 21,
    y: 5
  }, {
    x: 22,
    y: 5
  }, {
    x: 17,
    y: 6
  }, {
    x: 18,
    y: 6
  }, {
    x: 20,
    y: 6
  }, {
    x: 21,
    y: 6
  }, {
    x: 22,
    y: 6
  }, {
    x: 17,
    y: 7
  }, {
    x: 18,
    y: 7
  }, {
    x: 20,
    y: 7
  }, {
    x: 21,
    y: 7
  }, {
    x: 22,
    y: 7
  }],
  cig_outline: [{
    x: 17,
    y: 7
  }, {
    x: 17,
    y: 8
  }, {
    x: 18,
    y: 7
  }, {
    x: 19,
    y: 7
  }, {
    x: 20,
    y: 7
  }, {
    x: 22,
    y: 7
  }, {
    x: 23,
    y: 7
  }, {
    x: 24,
    y: 7
  }, {
    x: 25,
    y: 7
  }, {
    x: 17,
    y: 9
  }, {
    x: 18,
    y: 9
  }, {
    x: 19,
    y: 9
  }, {
    x: 20,
    y: 9
  }, {
    x: 22,
    y: 9
  }, {
    x: 23,
    y: 9
  }, {
    x: 24,
    y: 9
  }, {
    x: 25,
    y: 9
  }],
  cig_filter: [{
    x: 18,
    y: 8
  }, {
    x: 19,
    y: 8
  }],
  cig_body: [{
    x: 18,
    y: 8
  }, {
    x: 19,
    y: 8
  }]
}, _defineProperty(_POINTS, "cig_filter", [{
  x: 20,
  y: 8
}, {
  x: 22,
  y: 8
}, {
  x: 23,
  y: 8
}, {
  x: 24,
  y: 8
}]), _defineProperty(_POINTS, "cig_ember", [{
  x: 25,
  y: 8
}]), _defineProperty(_POINTS, "cig_smoke", [{
  x: 26,
  y: 8
}, {
  x: 26,
  y: 7
}, {
  x: 26,
  y: 6
}, {
  x: 25,
  y: 5
}, {
  x: 24,
  y: 5
}, {
  x: 23,
  y: 4
}]), _defineProperty(_POINTS, "bloody_tail_normal", [{
  x: 22,
  y: 17
}, {
  x: 22,
  y: 18
}, {
  x: 22,
  y: 20
}, {
  x: 22,
  y: 21
}, {
  x: 23,
  y: 18
}, {
  x: 23,
  y: 18
}, {
  x: 23,
  y: 19
}, {
  x: 23,
  y: 20
}, {
  x: 23,
  y: 22
}, {
  x: 24,
  y: 19
}, {
  x: 24,
  y: 20
}]), _defineProperty(_POINTS, "bloody_tail_fat", [{
  x: 22,
  y: 20
}, {
  x: 23,
  y: 20
}, {
  x: 26,
  y: 20
}, {
  x: 24,
  y: 21
}, {
  x: 23,
  y: 19
}, {
  x: 24,
  y: 19
}, {
  x: 25,
  y: 19
}, {
  x: 24,
  y: 18
}, {
  x: 25,
  y: 18
}, {
  x: 24,
  y: 17
}, {
  x: 23,
  y: 16
}]), _defineProperty(_POINTS, "claw_stripes_primary_regular_left", [{
  x: 8,
  y: 10
}, {
  x: 9,
  y: 10
}, {
  x: 10,
  y: 10
}, {
  x: 9,
  y: 11
}, {
  x: 10,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_accent_regular_left", [{
  x: 8,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_primary_big_left", [{
  x: 6,
  y: 10
}, {
  x: 7,
  y: 10
}, {
  x: 8,
  y: 10
}, {
  x: 9,
  y: 10
}, {
  x: 10,
  y: 10
}, {
  x: 11,
  y: 10
}, {
  x: 7,
  y: 11
}, {
  x: 8,
  y: 11
}, {
  x: 9,
  y: 11
}, {
  x: 10,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_accent_big_left", [{
  x: 6,
  y: 11
}, {
  x: 11,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_primary_missing_left", []), _defineProperty(_POINTS, "claw_stripes_accent_missing_left", []), _defineProperty(_POINTS, "claw_stripes_primary_ball_left", []), _defineProperty(_POINTS, "claw_stripes_accent_ball_left", []), _defineProperty(_POINTS, "claw_stripes_primary_mushroom_left", []), _defineProperty(_POINTS, "claw_stripes_accent_mushroom_left", [{
  x: 9,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_primary_scissors_left", [{
  x: 9,
  y: 10
}, {
  x: 9,
  y: 11
}]), _defineProperty(_POINTS, "claw_stripes_accent_scissors_left", [{
  x: 8,
  y: 10
}, {
  x: 10,
  y: 10
}]), _defineProperty(_POINTS, "tail_stripes_primary_normal", [{
  x: 15,
  y: 21
}, {
  x: 16,
  y: 23
}, {
  x: 20,
  y: 25
}, {
  x: 21,
  y: 24
}, {
  x: 23,
  y: 21
}, {
  x: 23,
  y: 22
}]), _defineProperty(_POINTS, "tail_stripes_accent_normal", [{
  x: 14,
  y: 21
}, {
  x: 15,
  y: 23
}, {
  x: 18,
  y: 25
}]), _defineProperty(_POINTS, "tail_stripes_primary_syringe", [{
  x: 15,
  y: 21
}, {
  x: 16,
  y: 23
}, {
  x: 20,
  y: 25
}]), _defineProperty(_POINTS, "tail_stripes_accent_syringe", [{
  x: 14,
  y: 21
}, {
  x: 15,
  y: 23
}, {
  x: 18,
  y: 25
}]), _defineProperty(_POINTS, "tail_stripes_primary_fat", [{
  x: 15,
  y: 21
}, {
  x: 16,
  y: 23
}, {
  x: 20,
  y: 25
}, {
  x: 21,
  y: 24
}, {
  x: 23,
  y: 21
}, {
  x: 24,
  y: 21
}, {
  x: 23,
  y: 22
}]), _defineProperty(_POINTS, "tail_stripes_accent_fat", [{
  x: 14,
  y: 21
}, {
  x: 15,
  y: 23
}, {
  x: 18,
  y: 25
}, {
  x: 24,
  y: 22
}, {
  x: 25,
  y: 22
}, {
  x: 25,
  y: 21
}]), _defineProperty(_POINTS, "tail_stripes_primary_ball", [{
  x: 15,
  y: 21
}, {
  x: 16,
  y: 23
}, {
  x: 20,
  y: 25
}, {
  x: 21,
  y: 24
}]), _defineProperty(_POINTS, "tail_stripes_accent_ball", [{
  x: 14,
  y: 21
}, {
  x: 15,
  y: 23
}, {
  x: 18,
  y: 25
}]), _defineProperty(_POINTS, "tail_stripes_primary_missing", [{
  x: 15,
  y: 21
}, {
  x: 16,
  y: 23
}, {
  x: 20,
  y: 25
}, {
  x: 21,
  y: 24
}]), _defineProperty(_POINTS, "tail_stripes_accent_missing", [{
  x: 14,
  y: 21
}, {
  x: 15,
  y: 23
}, {
  x: 18,
  y: 25
}]), _defineProperty(_POINTS, "core_stripes_primary", [{
  x: 14,
  y: 15
}, {
  x: 14,
  y: 17
}]), _defineProperty(_POINTS, "core_stripes_accent", [{
  x: 13,
  y: 15
}, {
  x: 13,
  y: 17
}, {
  x: 13,
  y: 19
}, {
  x: 14,
  y: 19
}]), _POINTS);
['regular', 'big', 'missing', 'ball', 'mushroom', 'scissors'].forEach(function (type) {
  POINTS["claw_stripes_primary_".concat(type, "_right")] = POINTS["claw_stripes_primary_".concat(type, "_left")].map(function (p) {
    return {
      x: 29 - p.x,
      y: p.y
    };
  });
  POINTS["claw_stripes_accent_".concat(type, "_right")] = POINTS["claw_stripes_accent_".concat(type, "_left")].map(function (p) {
    return {
      x: 29 - p.x,
      y: p.y
    };
  });
});
POINTS["core_stripes_primary"] = [].concat(_toConsumableArray(POINTS["core_stripes_primary"]), _toConsumableArray(POINTS["core_stripes_primary"].map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
})));
POINTS["core_stripes_accent"] = [].concat(_toConsumableArray(POINTS["core_stripes_accent"]), _toConsumableArray(POINTS["core_stripes_accent"].map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
})));
POINTS.core_primary = [].concat(_toConsumableArray(POINTS.core_primary), _toConsumableArray(POINTS.core_primary.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
})));
POINTS.core_accent = [].concat(_toConsumableArray(POINTS.core_accent), _toConsumableArray(POINTS.core_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
})));
POINTS.regular_right_claw = POINTS.regular_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.regular_right_claw_accent = POINTS.regular_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.regular_right_claw_outline = POINTS.regular_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.big_right_claw = POINTS.big_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.big_right_claw_accent = POINTS.big_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.big_right_claw_outline = POINTS.big_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.missing_right_claw = POINTS.missing_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.missing_right_claw_accent = POINTS.missing_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.missing_right_claw_outline = POINTS.missing_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.scissors_right_claw = POINTS.scissors_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.scissors_right_claw_accent = POINTS.scissors_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.scissors_right_claw_outline = POINTS.scissors_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.ball_right_claw = POINTS.ball_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.ball_right_claw_accent = POINTS.ball_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.ball_right_claw_outline = POINTS.ball_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.mushroom_right_claw = POINTS.mushroom_left_claw.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.mushroom_right_claw_accent = POINTS.mushroom_left_claw_accent.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
POINTS.mushroom_right_claw_outline = POINTS.mushroom_left_claw_outline.map(function (p) {
  return {
    x: 29 - p.x,
    y: p.y
  };
});
['stubby', 'insect', 'skinny', 'normal'].forEach(function (type) {
  POINTS["legs_".concat(type)] = [].concat(_toConsumableArray(POINTS["legs_".concat(type)]), _toConsumableArray(POINTS["legs_".concat(type)].map(function (p) {
    return {
      x: 29 - p.x,
      y: p.y
    };
  })));
  POINTS["primary_core_legs_".concat(type)] = [].concat(_toConsumableArray(POINTS["primary_core_legs_".concat(type)]), _toConsumableArray(POINTS["primary_core_legs_".concat(type)].map(function (p) {
    return {
      x: 29 - p.x,
      y: p.y
    };
  })));
  POINTS["secondary_core_legs_".concat(type)] = [].concat(_toConsumableArray(POINTS["secondary_core_legs_".concat(type)]), _toConsumableArray(POINTS["secondary_core_legs_".concat(type)].map(function (p) {
    return {
      x: 29 - p.x,
      y: p.y
    };
  })));
});
POINTS.bg_star = [].concat(_toConsumableArray(POINTS.bg_star), _toConsumableArray(POINTS.bg_star.map(function (p) {
  return {
    x: 31 - p.x,
    y: p.y
  };
})));
POINTS.bg_circle = [].concat(_toConsumableArray(POINTS.bg_circle), _toConsumableArray(POINTS.bg_circle.map(function (p) {
  return {
    x: 31 - p.x,
    y: p.y
  };
})), _toConsumableArray(POINTS.bg_circle.map(function (p) {
  return {
    x: 31 - p.x,
    y: 31 - p.y
  };
})), _toConsumableArray(POINTS.bg_circle.map(function (p) {
  return {
    x: p.x,
    y: 31 - p.y
  };
})));
module.exports = POINTS;

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((module) => {

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ALL_COLORS = ['#006DFF', '#2F2F43', '#6DFF43', '#B40000', '#6D2F9B', '#000000', '#FFFF43', '#B42F43', '#2FFFFF', '#FFB443', '#0000FF', '#FFFF9B', '#B42F9B', '#B46D43', '#6DFF00', '#2F2F9B', '#B4FF9B', '#B46D9B', '#6D6DFF', '#FFFFFF', '#002F43', '#6D2F43', '#B4009B', '#B46D00', '#B46DFF', '#2FB400', '#6D2FFF', '#6DFF9B', '#6DB443', '#2F6D43', '#B4FFFF', '#FF6D9B', '#B4B4FF', '#6D6D9B', '#2FB4FF', '#6DB49B', '#FFB49B', '#6DB4FF', '#2FFF9B', '#2FB443', '#6D0043', '#2F2FFF', '#FF6DFF', '#FF6D00', '#002F00', '#2FFF00', '#B4B49B', '#6DFFFF', '#B4B443', '#FFFF00', '#B42FFF', '#FFB4FF', '#00B49B', '#6D0000', '#6D00FF', '#B4B400', '#00FFFF', '#2FFF43', '#B4FF43', '#6D6D43', '#FF6D43', '#002F9B', '#006D9B', '#6D009B', '#000043', '#6D6D00', '#FF2F43', '#2FB49B', '#006D00', '#B4FF00', '#FF2FFF', '#6D2F00', '#00FF00', '#FF00FF', '#FF2F9B', '#00FF43', '#2F6D9B', '#00B400', '#B400FF', '#FF0043', '#00FF9B', '#00B4FF', '#B42F00', '#2F2F00', '#FF009B', '#006D43', '#2F6DFF', '#2F009B', '#00009B', '#2F6D00', '#FF2F00', '#002FFF', '#B40043', '#00B443', '#FF0000', '#2F00FF', '#2F0043', '#2F0000', '#6DB400', '#FFB400'];
var DARK_COLORS = ['#0000FF', '#6D0043', '#002F00', '#2F2F43', '#6D00FF', '#6D2F9B', '#6D009B', '#2F2F00', '#B40000', '#2F009B', '#6D2F00', '#B40043', '#2F00FF', '#2F6D00', '#6D2F43', '#006D9B', '#00009B', '#2F6D9B', '#2F0000', '#2F0043', '#000043', '#002F9B', '#2F2F9B', '#006D43', '#002F43', '#2F6D43', '#006D00', '#6D0000'];
var LIGHT_COLORS = ['#006DFF', '#2FB49B', '#B46D43', '#00B4FF', '#B42F9B', '#B4B443', '#FF6DFF', '#6DFFFF', '#FFFF9B', '#00B443', '#B42F00', '#B4B49B', '#6D2FFF', '#2F6DFF', '#B4B4FF', '#2FFF00', '#6DFF43', '#FF2F9B', '#6D6D43', '#FF6D9B', '#FF0000', '#002FFF', '#00FF00', '#B4FF9B', '#6D6D00', '#B4FFFF', '#B400FF', '#6DFF9B', '#FFFF43', '#2FFFFF', '#6DB4FF', '#00FFFF', '#00B49B', '#FF00FF', '#2FB400', '#2FB443', '#B4009B', '#2F2FFF', '#FFB49B', '#B46D00', '#B42FFF', '#B4FF43', '#FFB443', '#FFB400', '#FF2FFF', '#6DFF00', '#FF6D00', '#6DB49B', '#B4B400', '#B46D9B', '#FF009B', '#6D6DFF', '#FF0043', '#6DB400', '#00FF43', '#2FFF9B', '#2FFF43', '#FF6D43', '#2FB4FF', '#FFB4FF', '#FFFF00', '#B42F43', '#FF2F00', '#00FF9B', '#B4FF00', '#B46DFF', '#00B400', '#FF2F43', '#6D6D9B', '#6DB443'];
var COLORS = {
  ALL: ALL_COLORS,
  DARK: DARK_COLORS,
  LIGHT: LIGHT_COLORS
};

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var hexStringChars = '0123456789ABCDEF';

function randomHexChar() {
  return hexStringChars.charAt(randomIntFromRange(0, hexStringChars.length - 1));
}

function randomColor(type) {
  return pickRandom(COLORS[type]);
}

function pickRandom(array) {
  return array[randomIntFromRange(0, array.length - 1)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function blendColors(colorA, colorB, amount) {
  var _colorA$match$map = colorA.match(/\w\w/g).map(function (c) {
    return parseInt(c, 16);
  }),
      _colorA$match$map2 = _slicedToArray(_colorA$match$map, 3),
      rA = _colorA$match$map2[0],
      gA = _colorA$match$map2[1],
      bA = _colorA$match$map2[2];

  var _colorB$match$map = colorB.match(/\w\w/g).map(function (c) {
    return parseInt(c, 16);
  }),
      _colorB$match$map2 = _slicedToArray(_colorB$match$map, 3),
      rB = _colorB$match$map2[0],
      gB = _colorB$match$map2[1],
      bB = _colorB$match$map2[2];

  var r = Math.round(rA + (rB - rA) * amount).toString(16).padStart(2, '0');
  var g = Math.round(gA + (gB - gA) * amount).toString(16).padStart(2, '0');
  var b = Math.round(bA + (bB - bA) * amount).toString(16).padStart(2, '0');
  var result = '#' + r + g + b;
  return result;
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  blendColors: blendColors,
  pickRandom: pickRandom
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100;200;300;400;500&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  -webkit-text-size-adjust: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'M PLUS 1', sans-serif;\r\n  color: #345;\r\n  background-color: #feeeed;\r\n  margin: 0;\r\n}\r\n\r\n.controls {\r\n  width: 320px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.filters_container {\r\n  margin: 10px auto;\r\n  max-width: 900px;\r\n}\r\n\r\n#fps {\r\n  width: 320px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.filters {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 160px);\r\n  column-width: 160px;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.filter_segment {\r\n  text-align: left;\r\n  vertical-align: top;\r\n  /* width: 180px;\r\n\tmargin: 16px; */\r\n  white-space: nowrap;\r\n}\r\n\r\n.filters_link {\r\n  text-align: center;\r\n}\r\n\r\n.filters_link a {\r\n  text-decoration: none;\r\n}\r\n\r\n.canvas-container {\r\n  margin: 0 auto;\r\n  width: 320px;\r\n  height: 320px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;EACE,8BAA8B;AAChC;;AAEA;EACE,mCAAmC;EACnC,WAAW;EACX,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,mBAAmB;EACnB,SAAS;EACT,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB;gBACc;EACd,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;AACf","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1:wght@100;200;300;400;500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300;400;500&display=swap');\r\n\r\nhtml {\r\n  -webkit-text-size-adjust: none;\r\n}\r\n\r\nbody {\r\n  font-family: 'M PLUS 1', sans-serif;\r\n  color: #345;\r\n  background-color: #feeeed;\r\n  margin: 0;\r\n}\r\n\r\n.controls {\r\n  width: 320px;\r\n  margin: 0 auto;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.filters_container {\r\n  margin: 10px auto;\r\n  max-width: 900px;\r\n}\r\n\r\n#fps {\r\n  width: 320px;\r\n  margin: 0 auto;\r\n  text-align: center;\r\n}\r\n\r\n.filters {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 160px);\r\n  column-width: 160px;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.filter_segment {\r\n  text-align: left;\r\n  vertical-align: top;\r\n  /* width: 180px;\r\n\tmargin: 16px; */\r\n  white-space: nowrap;\r\n}\r\n\r\n.filters_link {\r\n  text-align: center;\r\n}\r\n\r\n.filters_link a {\r\n  text-decoration: none;\r\n}\r\n\r\n.canvas-container {\r\n  margin: 0 auto;\r\n  width: 320px;\r\n  height: 320px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./points */ "./src/js/points.js");
/* harmony import */ var _points__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_points__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
canvas.width = 320;
canvas.height = 320;
var selectedTraits = {
  outline_type: {
    black: true
  },
  bg_style: {
    blank: true
  },
  claw_left: {
    regular: true
  },
  claw_right: {
    regular: true
  },
  claws_unique: {
    "false": true
  },
  has_cigarette: {
    "false": true
  },
  legs: {
    normal: true
  },
  tail: {
    normal: true
  },
  bloody_tail: {
    "false": true
  },
  has_matches: {
    "false": true
  },
  has_halo: {
    "false": true
  },
  multicolored: {
    "false": true
  },
  colored_claws: {
    "false": true
  },
  colored_core: {
    "false": true
  },
  colored_tail: {
    "false": true
  },
  multicolor_type: {
    none: true
  },
  false_face: {
    none: true
  },
  evil_eye: {
    none: true
  },
  no_eyes: {
    "false": true
  }
};
document.querySelector('.filters_container').addEventListener('click', function (e) {
  if (e.target.tagName == 'INPUT') {
    var _e$target$id$split = e.target.id.split('__'),
        _e$target$id$split2 = _slicedToArray(_e$target$id$split, 2),
        trait = _e$target$id$split2[0],
        value = _e$target$id$split2[1];

    selectedTraits[trait][value] = e.target.checked;

    if (Object.values(selectedTraits[trait]).every(function (v) {
      return !v;
    })) {
      var randomValue = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.keys(selectedTraits[trait]));
      selectedTraits[trait][randomValue] = true;
      document.querySelector("#".concat(trait, "__").concat(randomValue)).checked = true;
    }
  }
});
var scorpionColors = {
  outline_color: '#FFB49B',
  body_color: '#2F00FF',
  eye_color: '#00FF43',
  bg_color: '#6DFF00',
  bg2_color: '#B42FFF',
  secondary_color: '#B46D43'
};

function randomizeColors(outline_style) {
  var outline_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor(outline_style);
  var body_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  var secondary_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  var eye_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  var bg_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  var bg2_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');

  while (outline_color === body_color) {
    body_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  }

  while (body_color === secondary_color) {
    secondary_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  }

  while (bg2_color === outline_color) {
    bg2_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  }

  while (bg2_color === bg_color) {
    bg_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().randomColor('ALL');
  }

  scorpionColors = {
    outline_color: outline_color,
    body_color: body_color,
    eye_color: eye_color,
    bg_color: bg_color,
    bg2_color: bg2_color,
    secondary_color: secondary_color
  };
}

randomizeColors('ALL'); // traits

var Trait = /*#__PURE__*/function () {
  function Trait(pointsWithColors) {
    _classCallCheck(this, Trait);

    this.pointsWithColors = pointsWithColors;
  }

  _createClass(Trait, [{
    key: "draw",
    value: function draw() {
      var _iterator = _createForOfIteratorHelper(this.pointsWithColors),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _step.value,
              points = _step$value.points,
              color = _step$value.color;
          c.fillStyle = color;

          var _iterator2 = _createForOfIteratorHelper(points),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _step2.value,
                  x = _step2$value.x,
                  y = _step2$value.y;
              c.fillRect(x * 10, y * 10, 10, 10);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Trait;
}();

function eyes() {
  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().eyes),
    color: scorpionColors.eye_color
  }]);
}

function claw(type, hand, multicolor_type) {
  var primary_color = multicolor_type === 'solid' ? scorpionColors.secondary_color : scorpionColors.body_color;
  return [{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_").concat(hand, "_claw")],
    color: primary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_").concat(hand, "_claw_accent")],
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(primary_color, scorpionColors.outline_color, 0.35)
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_").concat(hand, "_claw_outline")],
    color: scorpionColors.outline_color
  }];
}

function claw_left(type, multicolor_type) {
  if (type === 'ball') {
    return new Trait([].concat(_toConsumableArray(claw(type, 'left')), [{
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().ball_left_highlight),
      color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.bg_color, scorpionColors.bg2_color, 0.5)
    }]));
  }

  return new Trait(claw(type, 'left', multicolor_type));
}

function claw_right(type, multicolor_type) {
  if (type === 'ball') {
    return new Trait([].concat(_toConsumableArray(claw(type, 'right')), [{
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().ball_right_highlight),
      color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.bg_color, scorpionColors.bg2_color, 0.5)
    }]));
  }

  return new Trait(claw(type, 'right', multicolor_type));
}

function core(multicolor_type) {
  var primary_color = multicolor_type === 'solid' ? scorpionColors.secondary_color : scorpionColors.body_color;
  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().core_primary),
    color: primary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().core_accent),
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(primary_color, scorpionColors.outline_color, 0.35)
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().head),
    color: scorpionColors.outline_color
  }]);
}

function legs(type) {
  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["legs_".concat(type)],
    color: scorpionColors.outline_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["primary_core_legs_".concat(type)],
    color: scorpionColors.body_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["secondary_core_legs_".concat(type)],
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.body_color, scorpionColors.outline_color, 0.35)
  }]);
}

function tail(type, multicolor_type) {
  var primary_color = multicolor_type === 'solid' ? scorpionColors.secondary_color : scorpionColors.body_color;
  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_tail_outline")],
    color: scorpionColors.outline_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_tail_primary")],
    color: primary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["".concat(type, "_tail_accent")],
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(primary_color, scorpionColors.outline_color, 0.35)
  }]);
}

function blank_bg() {
  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().bg_blank),
    color: scorpionColors.bg2_color
  }]);
}

function evil_eye(type) {
  if (type == 'none') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().evil_eye_dark),
    color: type == 'blue' ? '#00048B' : '#8D0300'
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().evil_eye_light),
    color: type == 'blue' ? '#0008FF' : '#FF0600'
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().evil_eye_white),
    color: '#FFFFFF'
  }]);
}

function false_face(type) {
  if (type == 'none') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["false_face_".concat(type)],
    color: scorpionColors.eye_color
  }]);
}

function no_eyes(type) {
  if (type == 'false') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().eyes),
    color: scorpionColors.body_color
  }]);
}

function halo(type) {
  if (type == 'false') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  if (type == 'true') {
    return new Trait([{
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().halo),
      color: '#ffe495'
    }]);
  }
}

function matches(type) {
  if (type == 'false') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  if (type == 'true') {
    return new Trait([{
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().match_stick),
      color: '#ba9b7b'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().match_tip),
      color: '#b10000'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().match_box_strike),
      color: '#6d1d00'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().match_box_outline),
      color: '#000000'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().match_box_body),
      color: '#b3b3b3'
    }]);
  }
}

function cig(type) {
  if (type == 'false') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  if (type == 'true') {
    return new Trait([{
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().cig_outline),
      color: '#000000'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().cig_filter),
      color: '#df9964'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().cig_body),
      color: '#c3c3c3'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().cig_ember),
      color: '#FF0000'
    }, {
      points: (_points__WEBPACK_IMPORTED_MODULE_1___default().cig_smoke),
      color: '#757575'
    }]);
  }
}

function bloody_tail(type) {
  if (type == 'false') {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["bloody_tail_".concat(type)],
    color: '#8d0300'
  }]);
}

function core_stripes(active) {
  if (!active) {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().core_stripes_primary),
    color: scorpionColors.secondary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default().core_stripes_accent),
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.secondary_color, scorpionColors.outline_color, 0.35)
  }]);
}

function claw_stripes(active, hand, claw_type) {
  if (!active) {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["claw_stripes_primary_".concat(claw_type, "_").concat(hand)],
    color: scorpionColors.secondary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["claw_stripes_accent_".concat(claw_type, "_").concat(hand)],
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.secondary_color, scorpionColors.outline_color, 0.35)
  }]);
}

function tail_stripes(active, tail_type) {
  if (!active) {
    return new Trait([{
      points: [],
      color: '#FFFFFF'
    }]);
  }

  return new Trait([{
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["tail_stripes_primary_".concat(tail_type)],
    color: scorpionColors.secondary_color
  }, {
    points: (_points__WEBPACK_IMPORTED_MODULE_1___default())["tail_stripes_accent_".concat(tail_type)],
    color: _utils__WEBPACK_IMPORTED_MODULE_0___default().blendColors(scorpionColors.secondary_color, scorpionColors.outline_color, 0.35)
  }]);
}

var traitGenerators = {
  bg_style: {
    blank: blank_bg,
    frame: function frame() {
      return new Trait([{
        points: (_points__WEBPACK_IMPORTED_MODULE_1___default().bg_frame),
        color: scorpionColors.bg_color
      }]);
    },
    star: function star() {
      return new Trait([{
        points: (_points__WEBPACK_IMPORTED_MODULE_1___default().bg_star),
        color: scorpionColors.bg_color
      }]);
    },
    circle: function circle() {
      return new Trait([{
        points: (_points__WEBPACK_IMPORTED_MODULE_1___default().bg_circle),
        color: scorpionColors.bg_color
      }]);
    },
    square: function square() {
      return new Trait([{
        points: (_points__WEBPACK_IMPORTED_MODULE_1___default().bg_square),
        color: scorpionColors.bg_color
      }]);
    }
  },
  claw_left: {
    regular: function regular(multicolor_type) {
      return claw_left('regular', multicolor_type);
    },
    big: function big(multicolor_type) {
      return claw_left('big', multicolor_type);
    },
    missing: function missing(multicolor_type) {
      return claw_left('missing', multicolor_type);
    },
    ball: function ball(multicolor_type) {
      return claw_left('ball', multicolor_type);
    },
    mushroom: function mushroom(multicolor_type) {
      return claw_left('mushroom', multicolor_type);
    },
    scissors: function scissors(multicolor_type) {
      return claw_left('scissors', multicolor_type);
    }
  },
  claw_right: {
    regular: function regular(multicolor_type) {
      return claw_right('regular', multicolor_type);
    },
    big: function big(multicolor_type) {
      return claw_right('big', multicolor_type);
    },
    missing: function missing(multicolor_type) {
      return claw_right('missing', multicolor_type);
    },
    ball: function ball(multicolor_type) {
      return claw_right('ball', multicolor_type);
    },
    mushroom: function mushroom(multicolor_type) {
      return claw_right('mushroom', multicolor_type);
    },
    scissors: function scissors(multicolor_type) {
      return claw_right('scissors', multicolor_type);
    }
  },
  tail: {
    normal: function normal(multicolor_type) {
      return tail('normal', multicolor_type);
    },
    syringe: function syringe(multicolor_type) {
      return tail('syringe', multicolor_type);
    },
    fat: function fat(multicolor_type) {
      return tail('fat', multicolor_type);
    },
    ball: function ball(multicolor_type) {
      return tail('ball', multicolor_type);
    },
    missing: function missing(multicolor_type) {
      return tail('missing', multicolor_type);
    }
  },
  legs: {
    stubby: function stubby() {
      return legs('stubby');
    },
    insect: function insect() {
      return legs('insect');
    },
    skinny: function skinny() {
      return legs('skinny');
    },
    normal: function normal() {
      return legs('normal');
    }
  },
  evil_eye: {
    none: function none() {
      return evil_eye('none');
    },
    blue: function blue() {
      return evil_eye('blue');
    },
    red: function red() {
      return evil_eye('red');
    }
  },
  false_face: {
    none: function none() {
      return false_face('none');
    },
    tepid: function tepid() {
      return false_face('tepid');
    },
    frown: function frown() {
      return false_face('frown');
    },
    smile: function smile() {
      return false_face('smile');
    }
  },
  no_eyes: {
    "false": function _false() {
      return no_eyes('false');
    },
    "true": function _true() {
      return no_eyes('true');
    }
  },
  has_halo: {
    "false": function _false() {
      return halo('false');
    },
    "true": function _true() {
      return halo('true');
    }
  },
  has_cigarette: {
    "false": function _false() {
      return cig('false');
    },
    "true": function _true() {
      return cig('true');
    }
  },
  has_matches: {
    "false": function _false() {
      return matches('false');
    },
    "true": function _true() {
      return matches('true');
    }
  },
  bloody_tail: {
    "false": function _false() {
      return bloody_tail('false');
    },
    normal: function normal() {
      return bloody_tail('normal');
    },
    fat: function fat() {
      return bloody_tail('fat');
    },
    ball: function ball() {
      return bloody_tail('false');
    },
    syringe: function syringe() {
      return bloody_tail('false');
    },
    missing: function missing() {
      return bloody_tail('false');
    }
  },
  core_stripes: {
    "true": function _true() {
      return core_stripes(true);
    },
    "false": function _false() {
      return core_stripes(false);
    }
  },
  claw_stripes: {
    "true": function _true(hand, claw_type) {
      return claw_stripes(true, hand, claw_type);
    },
    "false": function _false(hand, claw_type) {
      return claw_stripes(false, hand, claw_type);
    }
  },
  tail_stripes: {
    "true": function _true(type) {
      return tail_stripes(true, type);
    },
    "false": function _false(type) {
      return tail_stripes(false, type);
    }
  }
};

function traits() {
  var outline_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.outline_type).filter(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        _ = _ref2[0],
        value = _ref2[1];

    return value;
  }))[0];

  if (outline_color == 'black') {
    scorpionColors.outline_color = '#000000';
  } else if (outline_color == 'white') {
    scorpionColors.outline_color = '#FFFFFF';
  }

  var bg_style = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.bg_style).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        _ = _ref4[0],
        value = _ref4[1];

    return value;
  }).map(function (_ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        key = _ref6[0],
        _ = _ref6[1];

    return traitGenerators.bg_style[key];
  }));
  var multicolored = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.multicolored).filter(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        _ = _ref8[0],
        value = _ref8[1];

    return value;
  }))[0];
  var multicolor_type = multicolored === 'true' ? _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.multicolor_type).filter(function (_ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        _ = _ref10[0],
        value = _ref10[1];

    return value;
  }))[0] : 'none';
  var claws_unique = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.claws_unique).filter(function (_ref11) {
    var _ref12 = _slicedToArray(_ref11, 2),
        _ = _ref12[0],
        value = _ref12[1];

    return value;
  }).map(function (_ref13) {
    var _ref14 = _slicedToArray(_ref13, 2),
        key = _ref14[0],
        _ = _ref14[1];

    return selectedTraits.claws_unique[key];
  }));
  var left_claw_options = Object.entries(selectedTraits.claw_left).filter(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
        _ = _ref16[0],
        value = _ref16[1];

    return value;
  });
  var right_claw_options = Object.entries(selectedTraits.claw_right).filter(function (_ref17) {
    var _ref18 = _slicedToArray(_ref17, 2),
        _ = _ref18[0],
        value = _ref18[1];

    return value;
  });
  var claw_left_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(left_claw_options)[0];
  var claw_right_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(right_claw_options)[0];
  var claw_left = traitGenerators.claw_left[claw_left_value];
  var claw_right = traitGenerators.claw_right[claw_right_value];

  if (claws_unique && left_claw_options > 1 || right_claw_options > 1) {
    while (claw_left_value == claw_right_value) {
      var _claw_left_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(left_claw_options)[0];
      var _claw_right_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(right_claw_options)[0];
      claw_left = traitGenerators.claw_left[_claw_left_value];
      claw_right = traitGenerators.claw_right[_claw_right_value];
    }
  }

  var tail_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.tail).filter(function (_ref19) {
    var _ref20 = _slicedToArray(_ref19, 2),
        _ = _ref20[0],
        value = _ref20[1];

    return value;
  }))[0];
  var tail = traitGenerators.tail[tail_value];
  var bloody_tail = traitGenerators.bloody_tail["false"];
  var bloody_tail_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.bloody_tail).filter(function (_ref21) {
    var _ref22 = _slicedToArray(_ref21, 2),
        _ = _ref22[0],
        value = _ref22[1];

    return value;
  }))[0];

  if (bloody_tail_value === 'true') {
    bloody_tail = traitGenerators.bloody_tail[tail_value];
  }

  var colored_core = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.colored_core).filter(function (_ref23) {
    var _ref24 = _slicedToArray(_ref23, 2),
        _ = _ref24[0],
        value = _ref24[1];

    return value;
  }))[0];
  var colored_tail = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.colored_tail).filter(function (_ref25) {
    var _ref26 = _slicedToArray(_ref25, 2),
        _ = _ref26[0],
        value = _ref26[1];

    return value;
  }))[0];
  var colored_claws = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.colored_claws).filter(function (_ref27) {
    var _ref28 = _slicedToArray(_ref27, 2),
        _ = _ref28[0],
        value = _ref28[1];

    return value;
  }))[0];
  var core_stripes = traitGenerators.core_stripes[multicolor_type === 'stripes' && colored_core === 'true'];
  var tail_stripes = traitGenerators.tail_stripes[multicolor_type === 'stripes' && colored_tail === 'true'];
  var claw_stripes = traitGenerators.claw_stripes[multicolor_type === 'stripes' && colored_claws === 'true'];
  var legs = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.legs).filter(function (_ref29) {
    var _ref30 = _slicedToArray(_ref29, 2),
        _ = _ref30[0],
        value = _ref30[1];

    return value;
  }).map(function (_ref31) {
    var _ref32 = _slicedToArray(_ref31, 2),
        key = _ref32[0],
        _ = _ref32[1];

    return traitGenerators.legs[key];
  }));
  var false_face_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.false_face).filter(function (_ref33) {
    var _ref34 = _slicedToArray(_ref33, 2),
        _ = _ref34[0],
        value = _ref34[1];

    return value;
  }))[0];

  if (false_face_value == 'none') {
    var false_face = traitGenerators.false_face.none;
    var no_eyes = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.no_eyes).filter(function (_ref35) {
      var _ref36 = _slicedToArray(_ref35, 2),
          _ = _ref36[0],
          value = _ref36[1];

      return value;
    }).map(function (_ref37) {
      var _ref38 = _slicedToArray(_ref37, 2),
          key = _ref38[0],
          _ = _ref38[1];

      return traitGenerators.no_eyes[key];
    }));
    var evil_eye = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.evil_eye).filter(function (_ref39) {
      var _ref40 = _slicedToArray(_ref39, 2),
          _ = _ref40[0],
          value = _ref40[1];

      return value;
    }).map(function (_ref41) {
      var _ref42 = _slicedToArray(_ref41, 2),
          key = _ref42[0],
          _ = _ref42[1];

      return traitGenerators.evil_eye[key];
    }));
  } else {
    var no_eyes = traitGenerators.no_eyes["false"];
    var evil_eye = traitGenerators.evil_eye.none;
    var false_face = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.false_face).filter(function (_ref43) {
      var _ref44 = _slicedToArray(_ref43, 2),
          _ = _ref44[0],
          value = _ref44[1];

      return value;
    }).map(function (_ref45) {
      var _ref46 = _slicedToArray(_ref45, 2),
          key = _ref46[0],
          _ = _ref46[1];

      return traitGenerators.false_face[key];
    }));
  }

  var has_halo_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.has_halo).filter(function (_ref47) {
    var _ref48 = _slicedToArray(_ref47, 2),
        _ = _ref48[0],
        value = _ref48[1];

    return value;
  }))[0];
  var has_matches_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.has_matches).filter(function (_ref49) {
    var _ref50 = _slicedToArray(_ref49, 2),
        _ = _ref50[0],
        value = _ref50[1];

    return value;
  }))[0];
  var has_cigarette_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.has_cigarette).filter(function (_ref51) {
    var _ref52 = _slicedToArray(_ref51, 2),
        _ = _ref52[0],
        value = _ref52[1];

    return value;
  }))[0];
  var has_halo = traitGenerators.has_halo[has_halo_value];
  var has_matches = traitGenerators.has_matches[has_matches_value];
  var has_cigarette = traitGenerators.has_cigarette[has_cigarette_value];

  if (claw_left_value == 'scissors' || claw_right_value == 'scissors') {
    has_halo = traitGenerators.has_halo["false"];
    has_halo_value = false;
  }

  if (claw_left_value != 'regular' || claw_right_value != 'regular') {
    has_matches = traitGenerators.has_matches["false"];
    has_matches_value = false;
    has_cigarette = traitGenerators.has_cigarette["false"];
    has_cigarette_value = false;
  }

  if (has_halo_value === 'true' && has_cigarette_value === 'true' && has_matches_value === 'false') {
    while (has_halo_value === 'true' && has_cigarette_value === 'true' || has_halo_value === 'false' && has_cigarette_value === 'false') {
      has_halo_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_cigarette_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_halo = traitGenerators.has_halo[has_halo_value];
      has_cigarette = traitGenerators.has_cigarette[has_cigarette_value];
    }
  } else if (has_halo_value === 'true' && has_cigarette_value === 'false' && has_matches_value === 'true') {
    while (has_halo_value === 'true' && has_matches_value === 'true' || has_halo_value === 'false' && has_matches_value === 'false') {
      has_halo_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_matches_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_halo = traitGenerators.has_halo[has_halo_value];
      has_matches = traitGenerators.has_matches[has_matches_value];
    }
  } else if (has_halo_value === 'false' && has_cigarette_value === 'true' && has_matches_value === 'true') {
    while (has_cigarette_value === 'true' && has_matches_value === 'true' || has_cigarette_value === 'false' && has_matches_value === 'false') {
      has_cigarette_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_matches_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_cigarette = traitGenerators.has_cigarette[has_cigarette_value];
      has_matches = traitGenerators.has_matches[has_matches_value];
    }
  } else if (has_halo_value === 'true' && has_cigarette_value === 'true' && has_matches_value === 'true') {
    while (has_halo_value === 'true' && has_cigarette_value === 'true' || has_halo_value === 'true' && has_matches_value === 'true' || has_matches_value === 'true' && has_cigarette_value === 'true' || has_halo_value === 'false' && has_cigarette_value === 'false' && has_matches_value === 'false') {
      has_halo_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_cigarette_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_matches_value = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(['true', 'false']);
      has_halo = traitGenerators.has_halo[has_halo_value];
      has_cigarette = traitGenerators.has_cigarette[has_cigarette_value];
      has_matches = traitGenerators.has_matches[has_matches_value];
    }
  }

  return [blank_bg, bg_style, function () {
    return core(multicolor_type);
  }, legs, eyes, no_eyes, function () {
    return claw_left(multicolor_type);
  }, function () {
    return claw_right(multicolor_type);
  }, function () {
    return tail(multicolor_type);
  }, has_halo, has_cigarette, has_matches, core_stripes, function () {
    return tail_stripes(tail_value);
  }, function () {
    return claw_stripes('left', claw_left_value);
  }, function () {
    return claw_stripes('right', claw_right_value);
  }, evil_eye, false_face, bloody_tail];
} // Animation Loop


var fpsInterval, now, startTime, then, elapsed;
var fps = 1;
var paused = false;

function isPaused() {
  return paused;
}

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now() - fpsInterval;
  startTime = then;
  animate();
}

function renderScorpion() {
  var outline_color = _utils__WEBPACK_IMPORTED_MODULE_0___default().pickRandom(Object.entries(selectedTraits.outline_type).filter(function (_ref53) {
    var _ref54 = _slicedToArray(_ref53, 2),
        _ = _ref54[0],
        value = _ref54[1];

    return value;
  }))[0];

  if (outline_color === 'dark') {
    randomizeColors('DARK');
  } else if (outline_color === 'light') {
    randomizeColors('LIGHT');
  } else {
    randomizeColors('ALL');
  }

  c.clearRect(0, 0, canvas.width, canvas.height);
  traits(selectedTraits).forEach(function (drawFn) {
    if (drawFn) {
      drawFn().update();
    }
  });
}

function animate() {
  // calc elapsed time since last loop
  now = Date.now();
  elapsed = now - then; // if enough time has elapsed, draw the next frame

  if (elapsed > fpsInterval) {
    // Get ready for next frame by setting then=now, but also adjust for your
    // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
    then = now - elapsed % fpsInterval; // Put your drawing code here

    renderScorpion();
  } // request another frame


  if (!isPaused()) {
    requestAnimationFrame(function () {
      return animate(isPaused());
    });
  }
}

document.getElementById('controls-play-pause').addEventListener('click', function (e) {
  paused = !paused;

  if (!isPaused()) {
    startAnimating(fps);
    e.target.innerHTML = 'Pause';
  } else {
    e.target.innerHTML = 'Play';
  }
});
document.getElementById('controls-slow-down').addEventListener('click', function () {
  fps /= 1.2;

  if (fps < 1 / 60) {
    fps = 1 / 60;
    alert("Scorpions per second can't go any lower... 1 per minute now.  A screensaver, maybe...?");
  }

  document.getElementById('fps').innerHTML = "SPS: ".concat(fps);
  fpsInterval = 1000 / fps;
});
document.getElementById('controls-speed-up').addEventListener('click', function () {
  fps *= 1.2;

  if (fps > 60) {
    fps = 60;
    alert('Maximum eye bleed has been reached.');
  } else {
    if (fps > 4) {
      alert('Warning!  Epilepsy risk potential if increasing speed any more!');
    }
  }

  if (fps < 1 / 10) {
    fps = 1;
  }

  document.getElementById('fps').innerHTML = "SPS: ".concat(fps);
  fpsInterval = 1000 / fps;
});
document.getElementById('controls-skip-to-next').addEventListener('click', function () {
  renderScorpion();
});
startAnimating(fps);
})();

/******/ })()
;
//# sourceMappingURL=canvas.bundle.js.map