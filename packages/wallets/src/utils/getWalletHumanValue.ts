import type { Wallet } from '@chives/api';
import { WalletType } from '@chives/api';
import { mojoToCATLocaleString, mojoToChivesLocaleString } from '@chives/core';

export default function getWalletHumanValue(wallet: Wallet, value: number): string {
  return wallet.type === WalletType.CAT
    ? mojoToCATLocaleString(value)
    : mojoToChivesLocaleString(value);
}
