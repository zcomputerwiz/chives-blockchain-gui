import Big from 'big.js';
import Unit from '../constants/Unit';
import chivesFormatter from './chivesFormatter';

export default function mojoToCAT(mojo: string | number | Big): number {
  return chivesFormatter(mojo, Unit.MOJO)
    .to(Unit.CAT)
    .toNumber();
}