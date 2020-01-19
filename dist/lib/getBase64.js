"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isString = _interopRequireDefault(require("./isString"));

var _isJson = _interopRequireDefault(require("./isJson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = value => {
  let buffer = false;

  if ((0, _isString.default)(value)) {
    buffer = Buffer.from(value, 'base64').toString('ascii');
  }

  if ((0, _isJson.default)(buffer)) {
    buffer = JSON.parse(Buffer.from(value, 'base64').toString('ascii'));
  }

  return buffer;
};

exports.default = _default;