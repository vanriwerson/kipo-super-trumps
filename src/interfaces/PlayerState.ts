import type { Card } from './Card';

export interface PlayerState {
  name: string;
  hand: Card[];
}
