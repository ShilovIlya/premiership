import { Component, OnInit } from '@angular/core';

import { Round } from './model/round';
import { Team } from './model/team';
import { PremiershipDataService } from './premiership-data.service';
import { Match } from "./model/match";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rounds: Round[] = [];
  selectedRound: Round;
  title = 'premiership';
  teams: Team[] = [];
  roundsAreLoaded = false;

  constructor(private premiershipDataService: PremiershipDataService) {
  }

  ngOnInit() {
    this.getRounds();
  }

  getRounds(): void {
    this.premiershipDataService.getPremiershipRounds()
      .subscribe(rounds => {
          this.rounds = [];
          rounds.forEach(round => {
            const matches = [];
            round.matches.forEach(match => {
              const keys = Object.keys(match);
              matches.push(new Match(keys[0], match[keys[0]], keys[1], match[keys[1]]));
            });
            this.rounds.push(new Round(round.round, matches))
          });
          this.selectedRound = this.rounds[0];
          this.setTeams();
          this.roundsAreLoaded = true;
        },
        error => console.log(error));
  }

  setTeams(): void {
    const teamsDict = {};
    for (const round of this.rounds) {
      for (const match of round.matches) {
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
    for (const teamName in teamsDict) {
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
}
