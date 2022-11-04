import React from 'react';

import { StatsContainer, StatItem, Label, Quantity } from './StyledComponents';

import { capitalize } from 'utils';

export const Stats = ({ stats }) => {
  const statsList = Object.entries(stats);
  return (
    <StatsContainer>
      {statsList.map(item => {
        const label = capitalize(item[0]);
        const quantity = item[1];

        return (
          <StatItem key={label}>
            <Label>{label}</Label>
            <Quantity>{quantity}</Quantity>
          </StatItem>
        );
      })}
    </StatsContainer>
  );
};
