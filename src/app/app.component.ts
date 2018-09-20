import { Component, OnInit } from '@angular/core';

import { Round } from './model/round';
import { Match } from './model/match';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rounds: Round[];
  selectedRound: Round;
  title = 'premiership';

  ngOnInit() {
    this.getRounds();
  }

  getRounds(): void {
    this.rounds = [
      new Round(1, [
        new Match('Hull City', 2, 'Leicester City', 1)
      ])
    ];
  }
}
