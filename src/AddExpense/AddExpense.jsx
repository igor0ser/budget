import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './AddExpense.css';
import AddExpenseName from './components/AddExpenseName';
import AddExpenseNumber from './components/AddExpenseNumber';

const steps = { AddExpenseName, AddExpenseNumber };
console.log(steps);

class AddExpense extends PureComponent {
  state = {
    step: 'AddExpenseName',
  };

  render() {
    const { val } = this.props;
    return (
      <div className="AddExpenseName">
        {val}
      </div>
    );
  }
}

AddExpense.propTypes = {
  val: PropTypes.string,
};

export default AddExpense;
