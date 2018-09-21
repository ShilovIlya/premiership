import { Component, Input, OnChanges } from '@angular/core';

import { Team } from '../model/team';

@Component({
  selector: 'leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  @Input() teams: Array<Team>;
}
