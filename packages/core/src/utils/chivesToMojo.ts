import Big from 'big.js';
import Unit from '../constants/Unit';
import chivesFormatter from './chivesFormatter';

export default function chivesToMojo(chives: string | number | Big): number {
  return chivesFormatter(chives, Unit.CHIVES)
    .to(Unit.MOJO)
    .toNumber();
}