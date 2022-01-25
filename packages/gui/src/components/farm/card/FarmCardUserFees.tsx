import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useCurrencyCode, mojoToChivesLocaleString } from '@chives/core';
import { useGetFarmedAmountQuery } from '@chives/api-react';
import FarmCard from './FarmCard';

export default function FarmCardUserFees() {
  const currencyCode = useCurrencyCode();
  const { data, isLoading } = useGetFarmedAmountQuery();

  const feeAmount = data?.feeAmount;

  const userTransactionFees = useMemo(() => {
    if (feeAmount !== undefined) {
      return (
        <>
          {mojoToChivesLocaleString(feeAmount)}
          &nbsp;
          {currencyCode}
        </>
      );
    }
  }, [feeAmount]);

  return (
    <FarmCard
      title={<Trans>User Transaction Fees</Trans>}
      value={userTransactionFees}
      loading={isLoading}
    />
  );
}
