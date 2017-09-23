import { Component, OnInit } from '@angular/core';

import { getProperty } from '../../../helpers/StorageHelper';
import { Tournament } from '../../../models/Tournament';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  tournamentStore:Tournament = getProperty('tournament');
  tournament:Tournament|null = null;

  ngOnInit() {
    if (this.tournamentStore) {
      this.tournament = new Tournament(this.tournamentStore.steps);
    }
  }
}
