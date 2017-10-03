import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddExpense from './AddExpense';

describe('AddExpense', () => {
  let comp;
  const suggestions = ['transport', 'coffee', 'lunch'];

  beforeEach(() => {
    comp = mount(<AddExpense suggestions={suggestions} />);
  });

  afterEach(() => {
    comp.unmount();
  });

  xit('should render AddExpenseName at first', () => {
    expect(comp.find('AddExpenseName')).toHaveLength(1);
  });

  xit('should render AddExpenseNumber when state is changed', () => {
    comp.setState({ view: 'AddExpenseNumber' });
    expect(comp.find('AddExpenseNumber')).toHaveLength(1);
  });

/*  it('has rendered input and submit', () => {
    expect(comp.find('form')).toHaveLength(1);
    expect(comp.find('input[type=text]')).toHaveLength(1);
    expect(comp.find('button[type=submit]')).toHaveLength(1);
    expect(comp.find('button')).toHaveLength(1 + suggestions.length);
    expect(toJson(comp)).toMatchSnapshot();
  });
  */

/*  it('change state on submit', () => {
    expect(comp.find('input')).toHaveLength(1);
    expect(toJson(comp)).toMatchSnapshot();
  });
  */
});
