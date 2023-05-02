import { BOOK_TYPE } from "./types";

export class Book {
  id: number;

  constructor(
    public name: BOOK_TYPE,
    public price: string,
    public data: string
  ) {}

  setID(newID: number) {
    this.id = newID;
  }
  getID() {
    return this.id;
  }
}
