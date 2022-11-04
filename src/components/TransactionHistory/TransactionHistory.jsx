import { PropTypes } from 'prop-types';

import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

import { Wrapper, TableBody } from './StyledComponents';

export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <TableHead headers={['Type', 'Amount', 'Currency']} />

      <TableBody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <TableRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          );
        })}
      </TableBody>
    </Wrapper>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
