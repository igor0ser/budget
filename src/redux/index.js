import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import addExpense from './addExpense';

const store = createStore(
  combineReducers({ addExpense }),
  applyMiddleware(logger),
);

export default store;
