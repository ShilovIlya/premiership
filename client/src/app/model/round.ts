import { Match } from './match';

export class Round {
  constructor(public roundNumber: number, public matches: Match[]) {
  }
}
