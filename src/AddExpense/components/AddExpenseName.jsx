import React from 'react';
import PropTypes from 'prop-types';
import InputWrapper from './InputWrapper';

const AddExpenseName = ({ val }) => (
  <InputWrapper type="text" onSubmit={() => val} tips={[]} />
);

AddExpenseName.propTypes = {
  val: PropTypes.number,
};

export default AddExpenseName;
