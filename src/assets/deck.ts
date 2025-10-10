import amy from './deckImages/amy.png';
import badBillions from './deckImages/badBillions.png';
import benson from './deckImages/benson.jpeg';
import brad from './deckImages/brad.png';
import capuccino from './deckImages/capuccino.png';
import dave from './deckImages/dave.jpeg';
import doag from './deckImages/doag.png';
import emilia from './deckImages/emilia.png';
import funGus from './deckImages/funGus.png';
import goodBillions from './deckImages/goodBillions.png';
import hyunSoo from './deckImages/hyunSoo.png';
import jamack from './deckImages/jamack.png';
import kipo from './deckImages/kipo.jpg';
import lioOak from './deckImages/lioOak.png';
import loba from './deckImages/loba.jpeg';
import mandu from './deckImages/mandu.jpeg';
import megaBeaver from './deckImages/megaBeaver.png';
import megaBunny from './deckImages/megaBunny.png';
import megaJaguar from './deckImages/megaJaguar.png';
import megaMonkey from './deckImages/megaMonkey.png';
import megaPigeon from './deckImages/megaPigeon.png';
import megaTurtoise from './deckImages/megaTurtoise.png';
import molly from './deckImages/molly.png';
import mulholland from './deckImages/mulholland.png';
import oldDave from './deckImages/oldDave.png';
import puck from './deckImages/puck.png';
import scarlemagne from './deckImages/scarlemagne.jpeg';
import songOak from './deckImages/songOak.png';
import strongDave from './deckImages/strongDave.jpeg';
import tongueDepressor from './deckImages/tongueDepressor.png';
import troy from './deckImages/troy.png';
import yumyan from './deckImages/yumyan.jpeg';
import type { Card } from '../interfaces/Card.js';

const deck: Card[] = [
  // Família "A"
  {
    id: '1A',
    name: 'Kipo Oak',
    strength: 30,
    agility: 30,
    intelligence: 45,
    charisma: 45,
    imgLink: kipo,
    isTrumpCard: false,
  },
  {
    id: '2A',
    name: 'Loba',
    strength: 40,
    agility: 45,
    intelligence: 40,
    charisma: 25,
    imgLink: loba,
    isTrumpCard: false,
  },
  {
    id: '3A',
    name: 'Mandu',
    strength: 20,
    agility: 50,
    intelligence: 30,
    charisma: 50,
    imgLink: mandu,
    isTrumpCard: false,
  },
  {
    id: '4A',
    name: 'Benson',
    strength: 25,
    agility: 45,
    intelligence: 35,
    charisma: 45,
    imgLink: benson,
    isTrumpCard: false,
  },
  {
    id: '5A',
    name: 'Dave',
    strength: 30,
    agility: 30,
    intelligence: 30,
    charisma: 40,
    imgLink: dave,
    isTrumpCard: false,
  },
  {
    id: '6A',
    name: 'Yumyan Pata-forte',
    strength: 55,
    agility: 55,
    intelligence: 20,
    charisma: 20,
    imgLink: yumyan,
    isTrumpCard: false,
  },
  {
    id: '7A',
    name: 'Scarlemagne (Hugo Oak)',
    strength: 45,
    agility: 35,
    intelligence: 50,
    charisma: 20,
    imgLink: scarlemagne,
    isTrumpCard: false,
  },
  {
    id: '8A',
    name: 'Dave (Forte)',
    strength: 50,
    agility: 40,
    intelligence: 30,
    charisma: 30,
    imgLink: strongDave,
    isTrumpCard: false,
  },
  // Família "B"
  {
    id: '1B',
    name: 'Lio Oak',
    strength: 35,
    agility: 35,
    intelligence: 50,
    charisma: 30,
    imgLink: lioOak,
    isTrumpCard: false,
  },
  {
    id: '2B',
    name: 'Dr. Emilia',
    strength: 35,
    agility: 40,
    intelligence: 55,
    charisma: 20,
    imgLink: emilia,
    isTrumpCard: false,
  },
  {
    id: '3B',
    name: 'Kipo (Mega Jaguar)',
    strength: 60,
    agility: 45,
    intelligence: 20,
    charisma: 25,
    imgLink: megaJaguar,
    isTrumpCard: false,
  },
  {
    id: '4B',
    name: 'Jamack',
    strength: 40,
    agility: 40,
    intelligence: 35,
    charisma: 35,
    imgLink: jamack,
    isTrumpCard: false,
  },
  {
    id: '5B',
    name: 'Amy',
    strength: 40,
    agility: 45,
    intelligence: 30,
    charisma: 35,
    imgLink: amy,
    isTrumpCard: false,
  },
  {
    id: '6B',
    name: 'Brad',
    strength: 45,
    agility: 40,
    intelligence: 30,
    charisma: 35,
    imgLink: brad,
    isTrumpCard: false,
  },
  {
    id: '7B',
    name: 'Mulholland',
    strength: 25,
    agility: 35,
    intelligence: 55,
    charisma: 35,
    imgLink: mulholland,
    isTrumpCard: false,
  },
  {
    id: '8B',
    name: 'Mega Macaca',
    strength: 60,
    agility: 45,
    intelligence: 20,
    charisma: 25,
    imgLink: megaMonkey,
    isTrumpCard: false,
  },

  // Família "C"
  {
    id: '1C',
    name: 'Doag',
    strength: 30,
    agility: 45,
    intelligence: 35,
    charisma: 40,
    imgLink: doag,
    isTrumpCard: false,
  },
  {
    id: '2C',
    name: 'Song Oak',
    strength: 35,
    agility: 30,
    intelligence: 60,
    charisma: 35,
    imgLink: songOak,
    isTrumpCard: false,
  },
  {
    id: '3C',
    name: 'Mega Castor',
    strength: 55,
    agility: 40,
    intelligence: 20,
    charisma: 35,
    imgLink: megaBeaver,
    isTrumpCard: false,
  },
  {
    id: '4C',
    name: 'Troy Sandoval',
    strength: 35,
    agility: 45,
    intelligence: 30,
    charisma: 40,
    imgLink: troy,
    isTrumpCard: false,
  },
  {
    id: '5C',
    name: 'Bilhões bom',
    strength: 45,
    agility: 30,
    intelligence: 45,
    charisma: 30,
    imgLink: goodBillions,
    isTrumpCard: false,
  },
  {
    id: '6C',
    name: 'Bilhões mau',
    strength: 35,
    agility: 40,
    intelligence: 45,
    charisma: 30,
    imgLink: badBillions,
    isTrumpCard: false,
  },
  {
    id: '7C',
    name: 'Capuccino',
    strength: 40,
    agility: 40,
    intelligence: 40,
    charisma: 30,
    imgLink: capuccino,
    isTrumpCard: false,
  },
  {
    id: '8C',
    name: 'Fun Gus',
    strength: 45,
    agility: 55,
    intelligence: 25,
    charisma: 25,
    imgLink: funGus,
    isTrumpCard: false,
  },

  // Família "D"
  {
    id: '1D',
    name: 'Mega Pombo',
    strength: 55,
    agility: 45,
    intelligence: 20,
    charisma: 30,
    imgLink: megaPigeon,
    isTrumpCard: false,
  },
  {
    id: '2D',
    name: 'Espátula',
    strength: 30,
    agility: 40,
    intelligence: 35,
    charisma: 45,
    imgLink: tongueDepressor,
    isTrumpCard: false,
  },
  {
    id: '3D',
    name: 'Hyun Soo',
    strength: 35,
    agility: 45,
    intelligence: 35,
    charisma: 35,
    imgLink: hyunSoo,
    isTrumpCard: false,
  },
  {
    id: '4D',
    name: 'Mega Coelho',
    strength: 50,
    agility: 40,
    intelligence: 20,
    charisma: 40,
    imgLink: megaBunny,
    isTrumpCard: false,
  },
  {
    id: '5D',
    name: 'Mega Tartaruga',
    strength: 60,
    agility: 30,
    intelligence: 30,
    charisma: 30,
    imgLink: megaTurtoise,
    isTrumpCard: false,
  },
  {
    id: '6D',
    name: 'Dave (Velho)',
    strength: 30,
    agility: 30,
    intelligence: 50,
    charisma: 40,
    imgLink: oldDave,
    isTrumpCard: true,
  },
  {
    id: '7D',
    name: 'Molly',
    strength: 30,
    agility: 45,
    intelligence: 40,
    charisma: 35,
    imgLink: molly,
    isTrumpCard: false,
  },
  {
    id: '8D',
    name: 'Puck',
    strength: 25,
    agility: 40,
    intelligence: 35,
    charisma: 50,
    imgLink: puck,
    isTrumpCard: false,
  },
];

export default deck;
