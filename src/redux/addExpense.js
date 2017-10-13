const SAVE_NAME = 'addExpense/SAVE_NAME';
export const SAVE_EXPENSE = 'addExpense/SAVE_EXPENSE';

export const saveName = (name) => ({ type: SAVE_NAME, name });
export const saveExpense = (expense) => ({ type: SAVE_EXPENSE, expense });

const reducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_NAME:
      return {
        name: action.name,
      };
    case SAVE_EXPENSE:
      return {};
    default:
      return state;
  }
};

export default reducer;
