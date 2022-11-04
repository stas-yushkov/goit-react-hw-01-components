import styled from 'styled-components';

import { colors } from 'constants/colors';

export const StatsContainer = styled.ul`
  width: 100%;
  background-color: ${colors.secondaryBgColor};
  color: ${colors.white};
  list-style: none;
  display: flex;
`;

export const StatItem = styled.li`
  background-color: ${props => props.color};
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 20px;
  text-align: center;
  line-height: 1.5;
`;

export const Percentage = styled(Label)`
  font-size: 30px;
  font-weight: bold;
`;
