import { getRandomArrayElement } from '../utils.js';
import { TYPE } from '../const.js';
import { destination } from './destination.js';

const mockPoints = [
  {
    'type': getRandomArrayElement(TYPE),
    'destination': getRandomArrayElement(destination),
    'date-from': new Date('2025-01-01'),
    'date-to': new Date('2025-01-02'),
    'base-price': 2000,
    'offers': null
  }, {
    'type': getRandomArrayElement(TYPE),
    'destination': getRandomArrayElement(destination),
    'date-from': new Date('2026-01-01'),
    'date-to': new Date('2026-04-02'),
    'base-price': 4500,
    'offers': null
  }, {
    'type': getRandomArrayElement(TYPE),
    'destination': getRandomArrayElement(destination),
    'date-from': new Date('2026-01-01'),
    'date-to': new Date('2026-01-02'),
    'base-price': 100,
    'offers': null
  }, {
    'type': getRandomArrayElement(TYPE),
    'destination': getRandomArrayElement(destination),
    'date-from': new Date('2025-01-01'),
    'date-to': new Date('2026-01-02'),
    'base-price': 2123,
    'offers': null
  },
];

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export {getRandomPoint};
