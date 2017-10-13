import { SAVE_EXPENSE } from './addExpense';

const reducer = (state = [], action) => {
  switch (action.type) {
    case SAVE_EXPENSE:
      return [...state, action.expense];
    default:
      return state;
  }
};

export default reducer;
