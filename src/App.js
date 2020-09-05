import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpanse from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpanse />
          <Transaction />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
