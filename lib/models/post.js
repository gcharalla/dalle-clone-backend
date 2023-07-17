"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PostSchema = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Post = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: true
  },
  prompt: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
});
var PostSchema = _mongoose["default"].model('Post', Post);
exports.PostSchema = PostSchema;