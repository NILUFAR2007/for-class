"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var book_1 = require("./mock/entities/book");
var writer_1 = require("./mock/entities/writer");
var book_repository_1 = require("./mock/repository/book-repository");
var writer_repository_1 = require("./mock/repository/writer-repository");
//----------------------
var book1 = new book_1.Book("Peter Pen", "$200", "25.07.2007");
var book2 = new book_1.Book("Harry Poter", "$400", "25.07.2007");
var book3 = new book_1.Book("Peter Pen", "$200", "25.07.2007");
var bookRepo = new book_repository_1.BookRepository();
bookRepo.create(book1);
bookRepo.create(book2);
// bookRepo.create(book3) // error
console.log(bookRepo);
//----------------------
var writer1 = new writer_1.Writer(" Sandra ", " Cisneros ", 25, "France");
var writer2 = new writer_1.Writer(" Jay  ", " Asher ", 25, "London");
var writer3 = new writer_1.Writer(" Jay  ", " Asher ", 25, "London");
var writerRepo = new writer_repository_1.WriterRepository();
writerRepo.create(writer1);
writerRepo.create(writer2);
// writerRepo.create(writer3); // error
console.log(writerRepo);
