import type { Card } from './Card';

export type CardAttrKey = keyof Omit<
  Card,
  'id' | 'name' | 'imgLink' | 'isTrumpCard'
>;
