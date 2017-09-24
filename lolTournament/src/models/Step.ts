import { Key } from './Key';
import { IKey } from '../interfaces/IKey';

export class Step {
  id: number;
  keys: Array<Key>;

  constructor(id: number, keys: Array<IKey>) {
    this.id = id;
    this.setKeys(keys);
  }
  /**
   * Make sure that keys will be an array of intances of Key
   * @param keys 
   */
  setKeys(keys: Array<IKey>) {
    this.keys = keys.map((key,index) => {
      console.log(key, index, index % 2);
      let nextIndex = index % 2;
      return new Key(key.id, key.nextKey, nextIndex);
    })
  }

}