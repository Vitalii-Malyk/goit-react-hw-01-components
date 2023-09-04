import PropTypes from 'prop-types';


import {
  StyleTableHeader,
  StyleTable,
  StyleTableTerm,
} from 'components/TransactionHistory/TransactionHistory.styled';



export const TransactionHistory = ({ items }) => {
  return (
    <StyleTable className="transaction-history">
      <StyleTableHeader className="table-header">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </StyleTableHeader>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <StyleTableTerm>{type}</StyleTableTerm>
              <StyleTableTerm>{amount}</StyleTableTerm>
              <StyleTableTerm>{currency}</StyleTableTerm>
            </tr>
          );
        })}
      </tbody>
    </StyleTable>
  );
};

TransactionHistory.prototype = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
