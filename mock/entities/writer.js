"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
var Writer = /** @class */ (function () {
    function Writer(firstName, lastName, age, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
    Writer.prototype.setID = function (newID) {
        this.id = newID;
    };
    Writer.prototype.getID = function () {
        return this.id;
    };
    return Writer;
}());
exports.Writer = Writer;
