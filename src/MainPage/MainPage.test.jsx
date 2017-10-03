import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MainPage from './MainPage';

describe('MainPage', () => {
  let comp;
  let goToManageBudgets;
  let goToAddExpense;

  beforeEach(() => {
    goToManageBudgets = jest.fn();
    goToAddExpense = jest.fn();

    comp = shallow(
      <MainPage
        goToManageBudgets={goToManageBudgets}
        goToAddExpense={goToAddExpense}
      />,
    );
  });

  afterEach(() => {
    comp.unmount();
  });

  it('has 2 buttons', () => {
    expect(comp.find('button.MainPage__btn')).toHaveLength(2);
    expect(toJson(comp)).toMatchSnapshot();
  });

  it('invokes goToManageBudgets on first button click', () => {
    comp.find('button').first().simulate('click');
    expect(goToManageBudgets.mock.calls).toHaveLength(1);
  });

  it('invokes goToAddExpense on second button click', () => {
    comp.find('button').last().simulate('click');
    expect(goToAddExpense.mock.calls).toHaveLength(1);
  });
});
