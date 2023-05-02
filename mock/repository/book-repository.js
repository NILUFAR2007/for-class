"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
var BookRepository = /** @class */ (function () {
    function BookRepository() {
        this.list = [];
        this.counter = 0;
    }
    BookRepository.prototype.create = function () {
        var books = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            books[_i] = arguments[_i];
        }
        for (var _a = 0, books_1 = books; _a < books_1.length; _a++) {
            var book = books_1[_a];
            if (this.isExist(book.name)) {
                throw new Error("This book(".concat(book.name, ") already exists"));
            }
            book.setID(++this.counter);
            this.list.push(book);
        }
    };
    BookRepository.prototype.isExist = function (bookname) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.name === bookname)
                return true;
        }
        return false;
    };
    BookRepository.prototype.getList = function () {
        return this.list;
    };
    return BookRepository;
}());
exports.BookRepository = BookRepository;
