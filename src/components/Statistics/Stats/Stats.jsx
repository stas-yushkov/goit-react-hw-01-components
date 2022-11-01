import React from 'react';

import {
  StatsContainer,
  StatItem,
  Label,
  Percentage,
} from './StyledComponents';

const randomDarkColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor((Math.random() * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};

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
