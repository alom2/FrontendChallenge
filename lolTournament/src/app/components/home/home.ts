import { Component, OnInit } from '@angular/core';

import { getProperty, setItem, remove } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';
import { AppState } from '../../../stores/AppState';
import { IAppState } from '../../../interfaces/IAppState';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  tournamentStore:Tournament | null;
  tournament:Tournament|null = null;
  AppState:IAppState = AppState;
  /**
   * Creates new tournament based on localstorage
   */
  ngOnInit() {
    this.tournamentStore = getProperty('tournament');
    if (this.tournamentStore) {
      this.tournament = new Tournament(
        this.tournamentStore.steps, this.tournamentStore.teams
      );
    }
  }
  /**
   * Saves tournament on localstorage
   */
  save() {
    this.AppState.isLoading = true;
    setTimeout(() => {
      setItem('tournament', this.tournament);
      this.AppState.isLoading = false;
    },1500);
  }
  /**
   * Removes tournament on localstorage
   */
  unsetTournament() {
    this.AppState.isLoading = true;
    setTimeout(() => {
      this.tournament = null;
      remove('tournament');
      this.AppState.isLoading = false;
    },1500);
  }

}
