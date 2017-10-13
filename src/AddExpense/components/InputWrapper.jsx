import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import toLower from 'lodash/toLower';

class InputWrapper extends PureComponent {
  state = { value: this.props.value }

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.saveValue(this.state.value);
  }

  render() {
    const { type, placeholder, tips, saveValue } = this.props;
    const { value } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="AddExpense__inputWrapper">
          <button className="btn btn_primary AddExpense__back" />
          <input
            type={type}
            className="AddExpense__input"
            placeholder={placeholder}
            onChange={this.handleChange}
            value={value}
          />
          <button className="btn btn_primary AddExpense__submit" type="submit" />
        </div>
        <div className="AddExpense__tipWrapper">
          {tips
            .filter(tip => toLower(tip).includes(toLower(value)))
            .map(tip => (
              <button
                key={tip}
                className="btn AddExpense__tip"
                onClick={() => saveValue(tip)}
              >
                {tip}
              </button>
            ))}
        </div>
      </form>
    );
  }
}

InputWrapper.defaultProps = {
  tips: [],
  value: '',
};

InputWrapper.propTypes = {
  type: PropTypes.oneOf(['text', 'number']).isRequired,
  tips: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ])),
  saveValue: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
};

export default InputWrapper;
