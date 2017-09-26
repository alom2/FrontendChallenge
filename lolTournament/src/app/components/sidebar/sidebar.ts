import { Component, Input, Output, EventEmitter } from '@angular/core';

import { setItem } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { AppState } from '../../../stores/AppState';
import { IAppState } from '../../../interfaces/IAppState';
import { steps, teams } from '../../../configs/TournamentConfig';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.scss']
})
export class Sidebar {
   /**
   * Gets tournament from Home to always look for the same object
   */
  @Input('tournament') tournament:Tournament|null;
  /**
   * Returns the change of tournament
   */
  @Output() tournamentChange = new EventEmitter();
  AppState:IAppState = AppState;
  /**
   * Toggles visibility of sidebar
   */
  toggleSidebar() {
    this.AppState.sidebarIsOpen = !this.AppState.sidebarIsOpen;
  }
  /**
   * validates every name of the teams before advence for the next step
   * it's posible change the name of a team but let this as an Empty name
   */
  getTeamNamesValidation() {
    return this.tournament.teams.every(team => team.name !== '');
  }

  /**
   * creates a tournament based on tournament mock
   */
  createTournament() {
    this.AppState.isLoading = true;
    setTimeout(() => {
      this.tournament = new Tournament(steps, teams);
      this.tournamentChange.emit(this.tournament);
      setItem('tournament', this.tournament);
      this.AppState.isLoading = false;
    }, 1500);
  }
  /**
   * save the tournament on localStorage
   */
  saveTournament() {
    this.AppState.isLoading = true;
    setTimeout(() => {
      setItem('tournament', this.tournament);
      this.AppState.isLoading = false;
    }, 1500);
  }

}
