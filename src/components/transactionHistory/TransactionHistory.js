import React from "react";
import TransactionHistoryItem from "./transactionHistoryItem/TransactionHistoryItem";
import styles from "./transactionHistory.module.css";
import transactions from "../../transactions.json";

const TransactionHistory = () => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transactions => (
          <TransactionHistoryItem
            transactions={transactions}
            key={transactions.id}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
