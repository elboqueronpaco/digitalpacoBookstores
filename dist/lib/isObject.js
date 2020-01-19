"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isDefined = _interopRequireDefault(require("./isDefined"));

var _isArray = _interopRequireDefault(require("./isArray"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = variable => (0, _isDefined.default)(variable) && typeof variable === 'object' && !(0, _isArray.default)(variable);

exports.default = _default;