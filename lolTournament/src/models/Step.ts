import { Key } from './Key';

export class Step {
  id: number;
  keys: Array<Key>;

  constructor(id: number, keys: Array<Key>) {
    this.id = id;
  }
  /**
   * Make sure that keys will be an array of intances of Key
   * @param keys 
   */
  setKeys(keys: Array<Key>) {
    this.keys = keys.map(key => new Key(key.id, this.id, key.teams));
  }

}