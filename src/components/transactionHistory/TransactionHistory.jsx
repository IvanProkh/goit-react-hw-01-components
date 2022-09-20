import TransactionHistoryLayout from './TransactionHistoryLayout';
import PropTypes from 'prop-types';
// import styles from '';
// console.log('~ styles', styles);

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryLayout
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

// const TransactionHistory = ({ items }) => {
//   return (
//     <table class="transaction-history">
//       <thead>
//         <tr>
//           <th>Type</th>
//           <th>Amount</th>
//           <th>Currency</th>
//         </tr>
//       </thead>

//       <tbody>
//         {items.map(item => (
//           <tr key={item.id}>
//             <td>{item.type}</td>
//             <td>{item.amount}</td>
//             <td>{item.currency}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

TransactionHistory.propTypes = {
  items: PropTypes.object.isRequired,
};

export default TransactionHistory;
