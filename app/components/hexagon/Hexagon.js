import { p } from 'P5Instance';
import RecursiveShape from './RecursiveShape';

export default class Hexagon extends RecursiveShape {
  constructor(options) {
    options.sides = 6;
    super(options);
  }
}

Hexagon.ANGLE = Math.PI * 2 / 6;