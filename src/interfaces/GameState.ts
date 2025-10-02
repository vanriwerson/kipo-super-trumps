import type { Card } from './Card';
import type { PlayerState } from './PlayerState';

export interface GameState {
  turnsCount: number;
  players: PlayerState[];
  currentTurnCards: Card[];
  stack: Card[];
  currentAttribute?: string;
  choosingPlayer: number;
}
