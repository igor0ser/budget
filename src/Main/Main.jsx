import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './Main.css';

const Main = () => (
  <div className="Main">
    <header className="Main__header">
      <img src={logo} alt="logo" className="Main__logo" />
      <h1 className="Main__headerText">your budget</h1>
    </header>
    <div className="Main__btnWrapper">
      <Link
        className="btn"
        to="budgets"
      >
        Budgets
      </Link>
      <Link
        className="btn btn_primary"
        to="add-expense"
      >
        Add Expense
      </Link>
    </div>
  </div>
);

Main.propTypes = {
  goToManageBudgets: PropTypes.func.isRequired,
  goToAddExpense: PropTypes.func.isRequired,
};

export default Main;
