import { ITeam } from './ITeam';

export interface IKey {
  id: number;
  teams?: Array<ITeam>;
}