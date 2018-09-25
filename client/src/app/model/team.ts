import { Match } from './match';

export class Team {
  private position: number;
  private name: string;
  private win: number = 0;
  private drawn: number = 0;
  private lost: number = 0;
  private goalsFor: number = 0;
  private goalsAgainst: number = 0;
  private goalsDifference: number = 0;
  private points: number = 0;

  constructor(name: string, matches: Match[]) {
    this.name = name;
    this.updateMatches(matches);
  }

  updateMatches(matches: Match[]) {
    for (let match of matches) {
      let teamGoals: number;
      let opponentGoals: number;
      if (match.firstTeam === this.name) {
        teamGoals = match.firstTeamGoals;
        opponentGoals = match.secondTeamGoals;
      } else {
        teamGoals = match.secondTeamGoals;
        opponentGoals = match.firstTeamGoals;
      }
      this.updateStatistic(teamGoals, opponentGoals);
    }
  }

  updateStatistic(goalsFor: number, goalsAgainst: number): void {
    this.goalsFor += goalsFor;
    this.goalsAgainst += goalsAgainst;
    this.goalsDifference += goalsFor - goalsAgainst;
    if (goalsFor === goalsAgainst) {
      this.drawn++;
      this.points++;
    } else if (goalsFor > goalsAgainst) {
      this.win++;
      this.points += 3;
    } else {
      this.lost++;
    }
  }

  getPosition(): number {
    return this.position;
  }

  setPosition(position: number): void {
    this.position = position;
  }

  getName(): string {
    return this.name;
  }

  getMatchesCount(): number {
    return this.win + this.drawn + this.lost;
  }

  getWin(): number {
    return this.win;
  }

  getDrawn(): number {
    return this.drawn;
  }

  getLost(): number {
    return this.lost;
  }

  getGoalsFor(): number {
    return this.goalsFor;
  }

  getGoalsAgainst(): number {
    return this.goalsAgainst;
  }

  getGoalsDifference(): number {
    return this.goalsDifference;
  }

  getPoints(): number {
    return this.points;
  }
}
