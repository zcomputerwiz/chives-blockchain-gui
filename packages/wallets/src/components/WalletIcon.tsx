import React from 'react';
import { Logo } from '@chives/core';
import styled from 'styled-components';
import { useGetCatListQuery } from '@chives/api-react';
import type { Wallet } from '@chives/api';
import { WalletType } from '@chives/api';
import { Typography } from '@material-ui/core';

const StyledSymbol = styled(Typography)`
  font-size: 1rem;
  font-weight: 600;
`;

type Props = {
  wallet: Wallet;
};

export default function WalletIcon(props: Props) {
  const { wallet } = props;
  const { data: catList = [], isLoading } = useGetCatListQuery();

  if (wallet.type === WalletType.STANDARD_WALLET) {
    return <Logo width={32} />;
  }

  if (!isLoading && wallet.type === WalletType.CAT) {
    const token = catList.find((token) => token.assetId === wallet.meta?.assetId);
    if (token) {
      return <StyledSymbol color="primary">{token.symbol}</StyledSymbol>;
    }
  }

  return null;
}
