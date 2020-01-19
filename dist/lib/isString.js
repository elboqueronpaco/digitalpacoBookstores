"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isDefined = _interopRequireDefault(require("./isDefined"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = variable => (0, _isDefined.default)(variable) && typeof variable === 'string';

exports.default = _default;