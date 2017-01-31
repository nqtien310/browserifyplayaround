(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var user_1 = require("./user");
user_1["default"].register('tiennguyen@gmail.com');
user_1["default"].register('unknownlover@gmail.com');
user_1["default"].register('new@gmail.com');
var _a = user_1["default"].all, user1 = _a[0], user2 = _a[1], user3 = _a[2];
alert(user1.introduce() + " " + user2.introduce() + " " + user3.introduce());

},{"./user":2}],2:[function(require,module,exports){
"use strict";
var User = (function () {
    function User(email) {
        this.email = email;
    }
    User.register = function (email) {
        var user = new User(email);
        User.all.push(user);
        return user;
    };
    User.prototype.introduce = function () {
        return "\n      Hi,\n      My name is " + this.email + ",\n      My created index is " + this.createdIndex() + "\n    ";
    };
    User.prototype.createdIndex = function () {
        return User.all.indexOf(this);
    };
    return User;
}());
User.all = [];
exports.__esModule = true;
exports["default"] = User;

},{}]},{},[1]);
