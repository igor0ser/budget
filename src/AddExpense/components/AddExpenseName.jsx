import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import InputWrapper from './InputWrapper';
import { saveName } from '../../redux/addExpense';

const tips = ['transport', 'coffee', 'lunch', 'products'];

class AddExpenseName extends PureComponent {
  state = { redirectPath: null }

  saveName = (name) => {
    this.props.dispatchSaveName(name);
    this.setState({ redirectPath: '/add-expense/number' });
  }

  goBack = () => {
    this.setState({ redirectPath: '/' });
  }

  render() {
    const { redirectPath } = this.state;
    if (redirectPath) return <Redirect push to={redirectPath} />;

    const { name } = this.props;
    return (
      <div className="AddExpense">
        <InputWrapper
          type="text"
          value={name}
          saveValue={this.saveName}
          goBack={this.goBack}
          tips={tips}
          placeholder="Enter expense name"
        />
      </div>
    );
  }
}

AddExpenseName.defaultProps = {
  name: '',
};

AddExpenseName.propTypes = {
  dispatchSaveName: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default connect(
  ({ addExpense: { name } }) => ({ name }),
  { dispatchSaveName: saveName },
)(AddExpenseName);
