import React from 'react';
import PropTypes from 'prop-types';
import logo from './images/logo.png';
import './MainPage.css';

const MainPage = ({ goToManageBudgets, goToAddExpense }) => (
  <div className="MainPage">
    <header className="MainPage__header">
      <img src={logo} alt="logo" className="MainPage__logo" />
      your budget
    </header>
    <div className="MainPage__btnWrapper">
      <button
        className="btn MainPage__btn"
        onClick={goToManageBudgets}
      >
        Manage Budgets
      </button>
      <button
        className="btn MainPage__btn"
        onClick={goToAddExpense}
      >
        Add Expense
      </button>
    </div>
  </div>
);

MainPage.propTypes = {
  goToManageBudgets: PropTypes.func.isRequired,
  goToAddExpense: PropTypes.func.isRequired,
};

export default MainPage;
