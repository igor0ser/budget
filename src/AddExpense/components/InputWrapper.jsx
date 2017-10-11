import React from 'react';
import PropTypes from 'prop-types';

const InputWrapper = ({ type, onSubmit, tips }) => (
  <form onSubmit={onSubmit}>
    <div className="AddExpense__inputWrapper">
      <button className="btn btn_primary" />
      <input type={type} className="AddExpense__input" />
      <button className="btn btn_primary" type="submit" />
    </div>
    <fieldset>
      {tips.map(tip => (
        <button key={tip} className="AddExpense__tip">
          {tip}
        </button>
      ))}
    </fieldset>
  </form>
);

InputWrapper.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  onSubmit: PropTypes.func.isRequired,
  tips: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InputWrapper;
