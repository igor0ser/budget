import React from 'react';
import PropTypes from 'prop-types';

const AddExpenseName = ({ val }) => (
  <div className="">
    {val}
  </div>
);

AddExpenseName.propTypes = {
  val: PropTypes.number,
};

export default AddExpenseName;
