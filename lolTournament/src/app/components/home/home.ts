import { Component, OnInit } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  tournamentStore:Tournament;
  tournament:Tournament|null = null;

  ngOnInit() {
    this.tournamentStore = getProperty('tournament');
    if (this.tournamentStore) {
      this.tournament = new Tournament(
        this.tournamentStore.steps, this.tournamentStore.teams
      );
    }
  }
}
