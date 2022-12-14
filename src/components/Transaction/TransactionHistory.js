import style from '../Transaction/Transaction.module.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction}>
      <thead className={style.head}>
        <tr>
          <th className={style.head_item}>Type</th>
          <th className={style.head_item}>Amount</th>
          <th className={style.head_item}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={style.row}>
            <td className={style.row_item}>{type}</td>
            <td className={style.row_item}>{amount}</td>
            <td className={style.row_item}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
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

export default TransactionHistory;
