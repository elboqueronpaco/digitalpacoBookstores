"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isObject = _interopRequireDefault(require("./isObject"));

var _isString = _interopRequireDefault(require("./isString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = value => {
  if ((0, _isObject.default)(value)) {
    return Buffer.from(JSON.stringify(value).toString('base64'));
  } else if ((0, _isString.default)(value)) {
    return Buffer.from(value).toString('base64');
  }

  return false;
};

exports.default = _default;