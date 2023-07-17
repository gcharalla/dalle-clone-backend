"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _postRoutes = _interopRequireDefault(require("./postRoutes"));
var _dalleRoutes = _interopRequireDefault(require("./dalleRoutes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var router = _express["default"].Router();
router.use(_express["default"].json({
  limit: '50mb'
}));
router.use(_express["default"].urlencoded({
  extended: true
}));
router.use('/post', _postRoutes["default"]);
router.use('/dalle', _dalleRoutes["default"]);
var _default = router;
exports["default"] = _default;