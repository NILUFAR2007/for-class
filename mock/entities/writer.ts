export class Writer {
  id: number;

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public country: string
  ) {}

  setID(newID: number) {
    this.id = newID;
  }
  getID() {
    return this.id;
  }
}
