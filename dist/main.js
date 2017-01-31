"use strict";
var user_1 = require("./user");
user_1["default"].register('tiennguyen@gmail.com');
user_1["default"].register('unknownlover@gmail.com');
user_1["default"].register('new@gmail.com');
var _a = user_1["default"].all, user1 = _a[0], user2 = _a[1], user3 = _a[2];
alert(user1.introduce() + " " + user2.introduce() + " " + user3.introduce());
