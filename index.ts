import { Book } from "./mock/entities/book";
import { Writer } from "./mock/entities/writer";
import { BookRepository } from "./mock/repository/book-repository";
import { WriterRepository } from "./mock/repository/writer-repository";

//----------------------
const book1 = new Book("Peter Pen", "$200", "25.07.2007");
const book2 = new Book("Harry Poter", "$400", "25.07.2007");
const book3 = new Book("Peter Pen", "$200", "25.07.2007");

const bookRepo = new BookRepository();
bookRepo.create(book1);
bookRepo.create(book2);
// bookRepo.create(book3) // error

console.log(bookRepo);

//----------------------
const writer1 = new Writer(" Sandra ", " Cisneros ", 25, "France");
const writer2 = new Writer(" Jay  ", " Asher ", 25, "London");
const writer3 = new Writer(" Jay  ", " Asher ", 25, "London");

const writerRepo = new WriterRepository();
writerRepo.create(writer1);
writerRepo.create(writer2);
// writerRepo.create(writer3); // error

console.log(writerRepo)

