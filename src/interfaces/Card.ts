export interface Card {
  id: string;
  name: string;
  strength: number;
  agility: number;
  intelligence: number;
  charisma: number;
  imgLink?: string;
  isTrumpCard: boolean;
}
