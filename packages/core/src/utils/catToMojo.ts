import Big from 'big.js';
import Unit from '../constants/Unit';
import chivesFormatter from './chivesFormatter';

export default function catToMojo(cat: string | number | Big): string {
  return chivesFormatter(cat, Unit.CAT)
    .to(Unit.MOJO)
    .toString();
}