"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(name, price, data) {
        this.name = name;
        this.price = price;
        this.data = data;
    }
    Book.prototype.setID = function (newID) {
        this.id = newID;
    };
    Book.prototype.getID = function () {
        return this.id;
    };
    return Book;
}());
exports.Book = Book;
