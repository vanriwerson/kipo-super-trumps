import amy from './deck_images/amy.png';
import badBillions from './deck_images/badBillions.png';
import benson from './deck_images/benson.jpeg';
import brad from './deck_images/brad.png';
import capuccino from './deck_images/capuccino.png';
import dave from './deck_images/dave.jpeg';
import doag from './deck_images/doag.png';
import emilia from './deck_images/emilia.png';
import funGus from './deck_images/funGus.png';
import goodBillions from './deck_images/goodBillions.png';
import hyunSoo from './deck_images/hyunSoo.png';
import jamack from './deck_images/jamack.png';
import kipo from './deck_images/kipo.jpg';
import lioOak from './deck_images/lioOak.png';
import loba from './deck_images/loba.jpeg';
import mandu from './deck_images/mandu.jpeg';
import megaBeaver from './deck_images/megaBeaver.png';
import megaBunny from './deck_images/megaBunny.png';
import megaJaguar from './deck_images/megaJaguar.png';
import megaMonkey from './deck_images/megaMonkey.png';
import megaPigeon from './deck_images/megaPigeon.png';
import megaTurtoise from './deck_images/megaTurtoise.png';
import molly from './deck_images/molly.png';
import mulholland from './deck_images/mulholland.png';
import oldDave from './deck_images/oldDave.png';
import puck from './deck_images/puck.png';
import scarlemagne from './deck_images/scarlemagne.jpeg';
import songOak from './deck_images/songOak.png';
import strongDave from './deck_images/strongDave.jpeg';
import tongueDepressor from './deck_images/tongueDepressor.png';
import troy from './deck_images/troy.png';
import yumyan from './deck_images/yumyan.jpeg';
import type { Card } from '../interfaces/Card.js';

const deck: Card[] = [
  // Família "A"
  {
    id: '1A',
    name: 'Kipo Oak',
    strength: 30,
    agility: 30,
    intelligence: 40,
    charisma: 50,
    imgLink: kipo,
    isTrumpCard: false,
  },
  {
    id: '2A',
    name: 'Loba',
    strength: 40,
    agility: 40,
    intelligence: 40,
    charisma: 30,
    imgLink: loba,
    isTrumpCard: false,
  },
  {
    id: '3A',
    name: 'Mandu',
    strength: 20,
    agility: 50,
    intelligence: 20,
    charisma: 60,
    imgLink: mandu,
    isTrumpCard: false,
  },
  {
    id: '4A',
    name: 'Benson',
    strength: 35,
    agility: 40,
    intelligence: 50,
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
    strength: 60,
    agility: 50,
    intelligence: 20,
    charisma: 20,
    imgLink: yumyan,
    isTrumpCard: false,
  },
  {
    id: '7A',
    name: 'Scarlemagne (Hugo Oak)',
    strength: 40,
    agility: 30,
    intelligence: 60,
    charisma: 20,
    imgLink: scarlemagne,
    isTrumpCard: false,
  },
  {
    id: '8A',
    name: 'Dave (Forte)',
    strength: 60,
    agility: 30,
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
    strength: 30,
    agility: 30,
    intelligence: 60,
    charisma: 30,
    imgLink: emilia,
    isTrumpCard: false,
  },
  {
    id: '3B',
    name: 'Kipo (Mega Jaguar)',
    strength: 50,
    agility: 40,
    intelligence: 50,
    charisma: 10,
    imgLink: megaJaguar,
    isTrumpCard: false,
  },
  {
    id: '4B',
    name: 'Jamack',
    strength: 40,
    agility: 35,
    intelligence: 30,
    charisma: 40,
    imgLink: jamack,
    isTrumpCard: false,
  },
  {
    id: '5B',
    name: 'Amy',
    strength: 45,
    agility: 50,
    intelligence: 20,
    charisma: 35,
    imgLink: amy,
    isTrumpCard: false,
  },
  {
    id: '6B',
    name: 'Brad',
    strength: 30,
    agility: 35,
    intelligence: 50,
    charisma: 35,
    imgLink: brad,
    isTrumpCard: false,
  },
  {
    id: '7B',
    name: 'Mulholland',
    strength: 25,
    agility: 30,
    intelligence: 60,
    charisma: 35,
    imgLink: mulholland,
    isTrumpCard: false,
  },
  {
    id: '8B',
    name: 'Mega Macaca',
    strength: 60,
    agility: 50,
    intelligence: 20,
    charisma: 20,
    imgLink: megaMonkey,
    isTrumpCard: false,
  },

  // Família "C"
  {
    id: '1C',
    name: 'Doag',
    strength: 40,
    agility: 35,
    intelligence: 45,
    charisma: 30,
    imgLink: doag,
    isTrumpCard: false,
  },
  {
    id: '2C',
    name: 'Song Oak',
    strength: 30,
    agility: 30,
    intelligence: 50,
    charisma: 40,
    imgLink: songOak,
    isTrumpCard: false,
  },
  {
    id: '3C',
    name: 'Mega Castor',
    strength: 50,
    agility: 45,
    intelligence: 25,
    charisma: 30,
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
    strength: 50,
    agility: 30,
    intelligence: 30,
    charisma: 40,
    imgLink: goodBillions,
    isTrumpCard: false,
  },
  {
    id: '6C',
    name: 'Bilhões mau',
    strength: 35,
    agility: 20,
    intelligence: 60,
    charisma: 35,
    imgLink: badBillions,
    isTrumpCard: false,
  },
  {
    id: '7C',
    name: 'Capuccino',
    strength: 45,
    agility: 25,
    intelligence: 50,
    charisma: 30,
    imgLink: capuccino,
    isTrumpCard: false,
  },
  {
    id: '8C',
    name: 'Fun Gus',
    strength: 50,
    agility: 40,
    intelligence: 30,
    charisma: 20,
    imgLink: funGus,
    isTrumpCard: false,
  },

  // Família "D"
  {
    id: '1D',
    name: 'Mega Pombo',
    strength: 50,
    agility: 40,
    intelligence: 25,
    charisma: 35,
    imgLink: megaPigeon,
    isTrumpCard: false,
  },
  {
    id: '2D',
    name: 'Espátula',
    strength: 30,
    agility: 30,
    intelligence: 40,
    charisma: 50,
    imgLink: tongueDepressor,
    isTrumpCard: false,
  },
  {
    id: '3D',
    name: 'Hyun Soo',
    strength: 45,
    agility: 35,
    intelligence: 35,
    charisma: 35,
    imgLink: hyunSoo,
    isTrumpCard: false,
  },
  {
    id: '4D',
    name: 'Mega Coelho',
    strength: 30,
    agility: 30,
    intelligence: 30,
    charisma: 60,
    imgLink: megaBunny,
    isTrumpCard: false,
  },
  {
    id: '5D',
    name: 'Mega Tartaruga',
    strength: 50,
    agility: 40,
    intelligence: 35,
    charisma: 25,
    imgLink: megaTurtoise,
    isTrumpCard: false,
  },
  {
    id: '6D',
    name: 'Dave (Velho)',
    strength: 30,
    agility: 35,
    intelligence: 50,
    charisma: 35,
    imgLink: oldDave,
    isTrumpCard: true,
  },
  {
    id: '7D',
    name: 'Molly',
    strength: 30,
    agility: 35,
    intelligence: 45,
    charisma: 40,
    imgLink: molly,
    isTrumpCard: false,
  },
  {
    id: '8D',
    name: 'Puck',
    strength: 40,
    agility: 40,
    intelligence: 40,
    charisma: 30,
    imgLink: puck,
    isTrumpCard: false,
  },
];

export default deck;
