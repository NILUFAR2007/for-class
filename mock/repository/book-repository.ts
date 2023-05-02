import { Book } from "../entities/book";

export class BookRepository {
    private list: Book[] = [];
	private counter: number = 0;

	create(...books: Book[]) {
		for (const book of books) {
			if (this.isExist(book.name)) {
				throw new Error(`This book(${book.name}) already exists`);
			}
			book.setID(++this.counter);
			this.list.push(book);
		}
	}

	isExist(bookname: string): boolean {
		for (let book of this.list) {
			if (book.name === bookname) return true;
		}

		return false;
	}

    getList(){
        return this.list;
    }
}
