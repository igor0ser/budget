import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddExpenseName from './components/AddExpenseName';
import AddExpenseNumber from './components/AddExpenseNumber';

import './AddExpense.css';


const AddExpense = () => (
  <Switch>
    <Route path="/add-expense" exact component={AddExpenseName} />
    <Route path="/add-expense/name" component={AddExpenseName} />
    <Route path="/add-expense/number" component={AddExpenseNumber} />
  </Switch>
);

export default AddExpense;
