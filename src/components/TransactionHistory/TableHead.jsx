import { StyledTableHead, TableHeader } from './StyledComponents';

export const TableHead = ({ headers }) => {
  return (
    <StyledTableHead>
      <tr>
        {headers.map(header => (
          <TableHeader>{header.toUpperCase()}</TableHeader>
        ))}
      </tr>
    </StyledTableHead>
  );
};
