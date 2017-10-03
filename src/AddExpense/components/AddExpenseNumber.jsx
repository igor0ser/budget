import React from 'react';
import PropTypes from 'prop-types';

const AddExpenseNumber = ({ val }) => (
  <div className="">
    {val}
  </div>
);

AddExpenseNumber.propTypes = {
  val: PropTypes.number,
};

export default AddExpenseNumber;
