import React from 'react';

import { randomDarkColor } from 'utils';

import {
  StatsContainer,
  StatItem,
  Label,
  Percentage,
} from './StyledComponents';

export const Stats = ({ stats }) => {
  return (
    <StatsContainer>
      {stats.map(({ id, label, percentage }) => {
        return (
          <StatItem key={id} color={randomDarkColor()}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        );
      })}
    </StatsContainer>
  );
};
