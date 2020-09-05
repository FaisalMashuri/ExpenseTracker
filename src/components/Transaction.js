import React, { useContext } from "react";
import TransactionList from "./TransactionList";
import { GlobalContext } from "../context/GlobalState";

function Transaction() {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionList transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default Transaction;
