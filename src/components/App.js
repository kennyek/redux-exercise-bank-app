import formatNumber from "format-number";
import PropTypes from 'prop-types';
import React from "react";
import { withdrawMoney } from "../actions";
import photographer from "../images/girl.png";
import "./App.css";
import store from "../store";

const App = props => {
  const { balance, username } = props;

  return (
    <div className="App">
      <img className="App__userpic" src={photographer} alt="user" />
      <p className="App__username">Hello, {username}! </p>
      <div className="App__amount">
        {formatNumber({ prefix: "$" })(balance)}
        <p className="App__amount--info">Total Amount</p>
      </div>

      <section className="App__buttons">
        <button data-amount="10000" onClick={handleClick}>WITHDRAW $10,000</button>
        <button data-amount="5000" onClick={handleClick}>WITHDRAW $5,000</button>
      </section>

      <p className="App__giveaway">Give away all your cash to charity</p>
    </div>
  );
}

App.propTypes = {
  balance: PropTypes.number.isRequired,
  username: PropTypes.string.isRequired
};

function handleClick(event) {
  const amount = Number(event.target.dataset.amount);
  store.dispatch(withdrawMoney(amount));
}

export default App;
