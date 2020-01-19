"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crypto = _interopRequireDefault(require("crypto"));

var _setBase = _interopRequireDefault(require("./setBase64"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (secret, str) => _crypto.default.createHash('sha1').update(`${(0, _setBase.default)(secret)}${str.toString()}`).digest('hex');

exports.default = _default;