import { StyledTableRow, TableData } from './StyledComponents';

import { capitalize } from 'utils';

export const TableRow = ({ type, amount, currency }) => {
  return (
    <StyledTableRow>
      <TableData>{capitalize(type)}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </StyledTableRow>
  );
};
