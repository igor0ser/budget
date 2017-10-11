import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import AddExpenseName from './components/AddExpenseName';
import AddExpenseNumber from './components/AddExpenseNumber';

import './AddExpense.css';


class AddExpense extends PureComponent {
  state = {
    step: 'AddExpenseName',
  };

  render() {
    const { val } = this.props;
    return (
      <div className="AddExpense">
        <AddExpenseName />
      </div>
    );
  }
}

AddExpense.propTypes = {
  val: PropTypes.string,
};

export default AddExpense;
