import styled from 'styled-components';

import { colors } from 'constants/colors';
import { GAP_BETWEEN_SECTIONS, CARD_WIDTH, BORDER_RADIUS } from 'constants';

export const StatisticsWrapper = styled.section`
  margin-top: ${GAP_BETWEEN_SECTIONS};
  display: flex;
  flex-direction: column;
  width: ${CARD_WIDTH};
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
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
