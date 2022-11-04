import styled from 'styled-components';

import { colors } from 'constants/colors';

export const StatisticsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: 2px;
  box-shadow: ${colors.boxShadow};
`;

export const Title = styled.h2`
  font-size: 40px;
  text-align: center;
  line-height: 1.5;
  font-weight: bold;
  padding: 40px;
  color: ${colors.appSecondaryColor};
`;
