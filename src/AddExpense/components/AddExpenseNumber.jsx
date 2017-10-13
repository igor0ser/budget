import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper';
import { saveExpense } from '../../redux/addExpense';

const tips = [40, 50, 60, 70, 12];

class AddExpenseNumber extends PureComponent {
  state = { redirectPath: null }

  saveExpense = (number) => {
    this.props.dispatchSaveExpense({
      name: this.props.name,
      number,
    });
    this.setState({ redirectPath: '/' });
  }

  goBack = () => {
    this.setState({ redirectPath: '/add-expense' });
  }

  render() {
    const { redirectPath } = this.state;
    if (redirectPath) return <Redirect push to={redirectPath} />;

    const { name } = this.props;
    if (name === undefined) return <Redirect to="/" />;
    return (
      <div className="AddExpense">
        <InputWrapper
          type="text"
          saveValue={this.saveExpense}
          goBack={this.goBack}
          placeholder={`Enter cost of ${name}`}
          tips={tips}
        />
      </div>
    );
  }
}


AddExpenseNumber.propTypes = {
  dispatchSaveExpense: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(
  ({ addExpense: { name } }) => ({ name }),
  { dispatchSaveExpense: saveExpense },
)(AddExpenseNumber);
