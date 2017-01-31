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
