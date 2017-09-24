import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { ITeam } from '../../../interfaces/ITeam';
import { Team } from '../../../models/Team';
import { teamMock } from '../../../configs/TournamentConfig';

@Component({
  selector: 'winner',
  templateUrl: './winner.html',
  styleUrls: ['./winner.scss']
})
export class Winner implements OnInit {
  @Input('teams') teams:Array<ITeam>;
  @Input('keyId') keyId:number;
  @Input('stepId') stepId:number;
  availableTeam: ITeam;

  ngOnInit() {
    this.setAvailableTeam(this.teams);
  }

  setAvailableTeam(teams:Array<ITeam>) {
    let availableTeam; 
    teams.forEach(team => {
      if(team.keyId === this.keyId && team.stepId === this.stepId) {
        availableTeam = team;
      }
    })
    if (availableTeam) {
      this.availableTeam = availableTeam;
    } else {
      this.availableTeam = new Team(teamMock.id, teamMock.name, this.stepId, this.keyId, teamMock.isActive);
    }
  }

}
