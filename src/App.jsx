import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './redux';
import Main from './Main/Main';
import AddExpense from './AddExpense/AddExpense';

const Budgets = () => <hr />;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/add-expense" component={AddExpense} />
        <Route path="/budgets" component={Budgets} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
