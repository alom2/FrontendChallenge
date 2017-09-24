import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Tournament } from '../../../models/Tournament';
import { Team } from '../../../models/Team';
import { ITeam } from '../../../interfaces/ITeam';
import { IKey } from '../../../interfaces/IKey';
import { teamMock } from '../../../configs/TournamentConfig';
 
@Component({
  selector: 'key',
  templateUrl: './key.html',
  styleUrls: ['./key.scss']
})
export class Key{
  @Input('tournament') tournament: Tournament;
  @Input('key') key:IKey; 
  @Input('stepId') stepId:number;
  @Output() tournamentChange = new EventEmitter();
  availablesTeams: Array<ITeam> = [];
  teamsPerKey: number = 2;

  /**
   * Set team next keyId
   * @param teamId 
   */
  setKeyWinner(teamId:string) {
    if (this.canSetNextKey()) {
      this.tournament.teams.forEach(team => {
        if (teamId === team.id) {
          team.keyId = this.key.nextKey;
          this.tournamentChange.emit(this.tournament);
        }
      })
    }
  }
  /**
   * Check if every team from this key is active
   */
  canSetNextKey() {
    return this.getAvailableTeams().every(team => team.isActive);
  }
  /**
   * Fill every key with two teams and if doesnt have teams fill with a mock team
   * @param teams 
   */
  fillAvailablesTeams(teams: Array<ITeam>) {
    if (teams.length < this.teamsPerKey) {
      teams.push(
        new Team(teamMock.id, teamMock.name, this.stepId, this.key.id, teamMock.isActive)
      );
      this.fillAvailablesTeams(teams);
    }
  }

  getAvailableTeams() {
    const teams = []
    this.tournament.teams.forEach(team => {
      if (team.keyId === this.key.id) {
        teams.push(team);
      }
    }); 
    if(teams.length < this.teamsPerKey) {
      this.fillAvailablesTeams(teams);
    }
    return teams;
  }
}
