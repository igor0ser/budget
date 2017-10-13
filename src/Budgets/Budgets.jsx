import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Budgets = ({ budgets }) => (
  <pre style={{ border: '1px solid red' }}>
    {JSON.stringify(budgets, 4, '')}
  </pre>
);

Budgets.propTypes = {
  budgets: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default connect(
  ({ budgets }) => ({ budgets }),
)(Budgets);
