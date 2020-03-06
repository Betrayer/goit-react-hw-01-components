import React from "react";
import"./transactionHistoryItem.module.css";

const TransactionHistoryItem = ({ transactions }) => {
  return (
    <tr>
      <td>{transactions.type}</td>
      <td>{transactions.amount}</td>
      <td>{transactions.currency}</td>
    </tr>
  );
};

export default TransactionHistoryItem;
