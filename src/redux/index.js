import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import addExpense from './addExpense';
import budgets from './budgets';

const store = createStore(
  combineReducers({ addExpense, budgets }),
  applyMiddleware(logger),
);

export default store;
