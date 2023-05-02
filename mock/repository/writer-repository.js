"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriterRepository = void 0;
var WriterRepository = /** @class */ (function () {
    function WriterRepository() {
        this.list = [];
        this.counter = 0;
    }
    WriterRepository.prototype.create = function () {
        var writers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            writers[_i] = arguments[_i];
        }
        for (var _a = 0, writers_1 = writers; _a < writers_1.length; _a++) {
            var writer = writers_1[_a];
            if (this.isExist(writer.firstName)) {
                throw new Error("Writer(".concat(writer.firstName, ") already exists"));
            }
            writer.setID(++this.counter);
            this.list.push(writer);
        }
    };
    WriterRepository.prototype.isExist = function (firstName) {
        for (var _i = 0, _a = this.list; _i < _a.length; _i++) {
            var writer = _a[_i];
            if (writer.firstName === firstName)
                return true;
        }
        return false;
    };
    WriterRepository.prototype.getList = function () {
        return this.list;
    };
    return WriterRepository;
}());
exports.WriterRepository = WriterRepository;
