import styled from 'styled-components';

import { colors } from 'constants/colors';
import { GAP_BETWEEN_SECTIONS, CARD_WIDTH, BORDER_RADIUS } from 'constants';

export const Wrapper = styled.table`
  margin-top: ${GAP_BETWEEN_SECTIONS};
  background-color: ${colors.white};
  box-shadow: ${colors.boxShadow};
  border-radius: ${BORDER_RADIUS};
  overflow: hidden;
  border: none;
  border-collapse: collapse;
`;

export const StyledTableHead = styled.thead`
  background-color: ${colors.tableHeadBg};
`;

export const TableBody = styled.tbody`
  //
`;

export const TableData = styled.td`
  text-align: center;
  padding: 20px 100px;
  &:first-of-type {
    text-align: left;
  }
  &:not(:last-of-type) {
    border-right: 1px solid ${colors.borderColor};
  }
`;

export const TableHeader = styled.th`
  color: ${colors.white};
  width: ${CARD_WIDTH / 2};
  padding: 20px 100px;
  &:first-of-type {
    text-align: left;
  }
  &:not(:last-of-type) {
    border-right: 1px solid ${colors.borderColor};
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-child(odd) {
    background-color: ${colors.white};
  }
  &:nth-child(even) {
    background-color: ${colors.secondaryBgColor};
  }
`;
