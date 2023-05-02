import { Writer } from "../entities/writer";

export class WriterRepository{
    private list: Writer[] = []
    private counter: number = 0

    create(...writers: Writer[]): void {
		for (let writer of writers) {
			if (this.isExist(writer.firstName)) {
				throw new Error(`Writer(${writer.firstName}) already exists`);
			}

			writer.setID(++this.counter);
			this.list.push(writer);
		}
	}

    isExist(firstName: string): boolean {
		for (let writer of this.list) {
			if (writer.firstName === firstName) return true;
		}

		return false;
	}
}