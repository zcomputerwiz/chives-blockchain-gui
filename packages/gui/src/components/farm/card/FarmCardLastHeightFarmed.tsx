import React from 'react';
import { Trans } from '@lingui/macro';
import { FormatLargeNumber } from '@chives/core';
import { useGetFarmedAmountQuery } from '@chives/api-react';
import FarmCard from './FarmCard';

export default function FarmCardLastHeightFarmed() {
  const { data, isLoading } = useGetFarmedAmountQuery();

  const lastHeightFarmed = data?.lastHeightFarmed;

  return (
    <FarmCard
      title={<Trans>Last Height Farmed</Trans>}
      value={<FormatLargeNumber value={lastHeightFarmed} />}
      description={!lastHeightFarmed && <Trans>No blocks farmed yet</Trans>}
      loading={isLoading}
    />
  );
}
