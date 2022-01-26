import React from 'react';
import { Trans } from '@lingui/macro';
import { useGetNetworkInfoQuery } from '@chives/api-react';
import { CardSimple } from '@chives/core';

export default function FullNodeCardNetworkName() {
  const { data: networkInfo, isLoading } = useGetNetworkInfoQuery(); 
  const value = networkInfo?.networkName;

  return (
    <CardSimple
      loading={isLoading}
      valueColor="textPrimary"
      title={<Trans>Network Name</Trans>}
      value={value}
    />
  );
}
