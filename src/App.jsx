import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './Main/Main';
import AddExpense from './AddExpense/AddExpense';

const Budgets = () => <hr />;

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/budgets" component={Budgets} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
