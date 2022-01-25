import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToChivesLocaleString } from '@chives/core';
import { useGetFarmedAmountQuery } from '@chives/api-react';
import FarmCard from './FarmCard';

export default function FarmCardTotalChivesFarmed() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading } = useGetFarmedAmountQuery();

  const farmedAmount = data?.farmedAmount;

  const totalChivesFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      return (
        <>
          {mojoToChivesLocaleString(farmedAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>Total Chives Farmed</Trans>}
      value={totalChivesFarmed}
      loading={isLoading}
    />
  );
}
