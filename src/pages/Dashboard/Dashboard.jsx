import { useState } from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import List from "../../components/List/List";
import TotalMoney from "../../components/TotalMoney/TotalMoney";
import { DashboardStyled } from "./styles";

function Dashboard({ setIsLogged }) {
  
  const [transactions, setTransactions] = useState([]);

  return (
    <div>
      <Header setIsLogged={setIsLogged} />

      <DashboardStyled className="container">
        <div className="form--total">
          <Form setTransactions={setTransactions} />
          <TotalMoney transactions={transactions} />
        </div>

        <List setTransactions={setTransactions} transactions={transactions} />
      </DashboardStyled>
    </div>
  );
}

export default Dashboard;
