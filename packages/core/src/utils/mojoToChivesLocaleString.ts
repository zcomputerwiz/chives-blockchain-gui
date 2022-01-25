import Big from 'big.js';
import Unit from '../constants/Unit';
import chivesFormatter from './chivesFormatter';

export default function mojoToChivesLocaleString(mojo: string | number | Big) {
  return chivesFormatter(Number(mojo), Unit.MOJO)
    .to(Unit.CHIVES)
    .toLocaleString();
}