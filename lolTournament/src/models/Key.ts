export class Key {
  id: number;
  nextKey: number;
  nextIndex: number;
  lastTeamId: string;

  constructor(id: number, nextKey: number, nextIndex:number, lastTeamId:string = '') {
    this.id = id;
    this.nextIndex = nextIndex;
    this.nextKey = nextKey;
    this.lastTeamId = lastTeamId;
  }
}