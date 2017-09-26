export class Key {
  id: number;
  nextKey: number;
  lastTeamId: string;

  constructor(id: number, nextKey: number, lastTeamId:string = '') {
    this.id = id;
    this.nextKey = nextKey;
    this.lastTeamId = lastTeamId;
  }
}