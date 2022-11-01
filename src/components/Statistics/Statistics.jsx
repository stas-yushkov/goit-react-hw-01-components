import React from 'react';
import PropTypes from 'prop-types';

import { StatisticsWrapper, Title } from './StyledComponents';
import { Stats } from './Stats/Stats';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrapper hasTitle={title.length}>
      {title && <Title>{title}</Title>}

      <Stats stats={stats} />
    </StatisticsWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }).isRequired
  ),
};
