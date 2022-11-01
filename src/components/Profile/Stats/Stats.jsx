import React from 'react';

import { StatsContainer, StatItem, Label, Quantity } from './StyledComponents';

export const Stats = ({ stats }) => {
  const statsList = Object.entries(stats);
  return (
    <StatsContainer>
      {statsList.map(item => {
        const label = `${item[0][0].toUpperCase()}${item[0].slice(1)}`;
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
