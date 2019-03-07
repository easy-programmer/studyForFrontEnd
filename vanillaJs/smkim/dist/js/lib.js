"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.power = power;
exports.Person = exports.pi = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var pi = Math.PI;
exports.pi = pi;

function power(x, y) {
  return Math.pow(x, y);
}

var Person = function Person(name) {
  _classCallCheck(this, Person);

  this.name = name;
};

exports.Person = Person;