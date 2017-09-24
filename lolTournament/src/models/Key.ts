export class Key {
  id: number;
  nextKey: number;
  nextIndex: number;

  constructor(id: number, nextKey: number, nextIndex) {
    this.id = id;
    this.nextIndex = nextIndex;
    this.nextKey = nextKey;
  }
}