"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _isPassword = _interopRequireDefault(require("./isPassword"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (psw1, psw2) => (0, _isPassword.default)(psw1) && (0, _isPassword.default)(psw2) && psw1 === psw2;

exports.default = _default;