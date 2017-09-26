import { getProperty } from './StorageHelper';
import { ITeam } from '../interfaces/ITeam';

/**
 * Sort base on teams Id and if the id is before
 * the half of teams array to show in the right position
 * @param firstId 
 * @param secondId 
 */
const setTeamSort = (firstId, secondId, storedTeams) => {
  let sortOrder:number;
  const filledId = firstId || secondId;
  storedTeams.forEach((storedTeam, index) => {
    if (index < 2 && storedTeam.id === filledId ) {
      sortOrder = -1;
    }
  });
  return sortOrder || 1;
}

/**
 * Sort teams for every key
 * @param teams 
 */
export const sortTeams = (teams:Array<ITeam>, storedTeams) => {
  return teams.sort((teamA:ITeam, teamB:ITeam) => {
    if (teamA.id === '' || teamB.id === '') {
      return setTeamSort(teamA.id, teamB.id, storedTeams);
    } else if (teamA.id > teamB.id) {
      return 1;
    }
  });
};
