import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let comp;

  beforeEach(() => {
    comp = shallow(<App />);
  });

  afterEach(() => {
    comp.unmount();
  });

  it('has two buttons and header', () => {
    // expect(comp.find('header')).toHaveLength(1);
    // expect(comp.find('button.btn')).toHaveLength(2);
    expect(comp.find('MainPage')).toHaveLength(1);
    // expect(toJson(comp)).toMatchSnapshot();
  });

  it('changes state on first button click', () => {
    comp.find('button').first().simulate('click');
    expect(comp.state().view).toBe('ManageBudgets');
  });

  it('changes state on second button click', () => {
    comp.find('button').last().simulate('click');
    expect(comp.state().view).toBe('AddExpense');
  });

  it.only('changes state on second button click', () => {
    comp.instance().goToAddExpense();
    expect(comp.state().view).toBe('AddExpense');
    expect(comp.find('AddExpense')).toHaveLength(1);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
});
