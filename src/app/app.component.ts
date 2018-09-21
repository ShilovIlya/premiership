import { Component, OnInit } from '@angular/core';

import { Round } from './model/round';
import { Match } from './model/match';
import { Team } from './model/team';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rounds: Round[];
  selectedRound: Round;
  title = 'premiership';
  teams: Team[] = [];

  ngOnInit() {
    this.getRounds();
    this.selectedRound = this.rounds[0];
    this.setTeams();
  }

  setTeams(): void {
    let teamsDict = {};
    for (let round of this.rounds) {
      for (let match of round.matches) {
        if (teamsDict.hasOwnProperty(match.firstTeam)) {
          teamsDict[match.firstTeam].push(match);
        } else {
          teamsDict[match.firstTeam] = [match];
        }
        if (teamsDict.hasOwnProperty(match.secondTeam)) {
          teamsDict[match.secondTeam].push(match);
        } else {
          teamsDict[match.secondTeam] = [match];
        }
      }
    }
    for (let teamName in teamsDict) {
      this.teams.push(new Team(teamName, teamsDict[teamName]));
    }
    this.setTeamsPosition();
  }

  compareTeam = (team1: Team, team2: Team) => {
    let result: boolean;
    if (team1.getPoints() === team2.getPoints()) {
      if (team1.getGoalsDifference() === team2.getGoalsDifference()) {
        result = team1.getGoalsFor() > team2.getGoalsFor();
      } else {
        result = team1.getGoalsDifference() > team2.getGoalsDifference();
      }
    } else {
      result = team1.getPoints() > team2.getPoints();
    }
    return result ? -1 : 1;
  }

  setTeamsPosition(): void {
    this.teams = this.teams.sort(this.compareTeam);
    this.teams.forEach((team, index) => {
      team.setPosition(index + 1);
    });
  }

  getRounds(): void {
    this.rounds = [
      new Round(1, [
        new Match('Hull City', 2, 'Leicester City', 1),
        new Match('Burnley', 0, 'Swansea', 1),
        new Match('Crystal Palace', 0, 'WestBromwich Albion', 1),
        new Match('Everton', 1, 'Tottenham Hotspur', 1),
        new Match('Middlesbrtough', 1, 'Stoke City', 1),
        new Match('Southampton', 1, 'Watford', 1),
        new Match('Manchester City', 2, 'Sunderland', 1),
        new Match('Bournemouth', 1, 'Manchester United', 3),
        new Match('Arsenal', 3, 'Liverpool', 4),
        new Match('Chelsea', 2, 'WestHam United', 1)
      ]),
      new Round(2, [
        new Match('Manchester United', 2, 'Southampton', 0),
        new Match('Stoke City', 1, 'Manchester City', 4),
        new Match('Burnley', 2, 'Liverpool', 0),
        new Match('Swansea', 0, 'Hull City', 2),
        new Match('Tottenham Hotspur', 1, 'Crystal Palace', 0),
        new Match('Watford', 1, 'Chelsea', 2),
        new Match('West Bromwich Albion', 1, 'Everton', 2),
        new Match('Leicester City', 0, 'Arsenal', 0),
        new Match('Sunderland', 1, 'Middlesbrough', 2),
        new Match('West Ham United', 1, 'Bournemouth', 0)
      ])
    ]
  }
}
