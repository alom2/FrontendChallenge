import { Component, Input } from '@angular/core';

import { ITeam } from '../../../interfaces/ITeam';
import { Team } from '../../../models/Team';
import { Tournament } from '../../../models/Tournament';
import { teamMock } from '../../../configs/TournamentConfig';

@Component({
  selector: 'winner',
  templateUrl: './winner.html',
  styleUrls: ['./winner.scss']
})
export class Winner {
  @Input('tournament') tournament:Tournament;
  @Input('keyId') keyId:number;
  @Input('stepId') stepId:number;

  winnerText:string = '';

  /**
   * Get the winner team and if doesnt have team fill out with a mock
   * @param teams 
   */
  getAvailableTeam() {
    let availableTeam;
    this.tournament.teams.forEach(team => {
      if(team.keyId === this.keyId) {
        availableTeam = team;
      }
    })
    if (availableTeam) {
      this.winnerText = '"Quem vai encarar o campeão?" - Jax'
      return availableTeam;
    }
    return new Team(teamMock.id, teamMock.name, this.stepId, this.keyId, teamMock.isActive);
  }

}
