import React, { PureComponent } from 'react';
import MainPage from './MainPage/MainPage';
import AddExpense from './AddExpense/AddExpense';

const ManageBudgets = () => <hr />;

const views = { MainPage, ManageBudgets, AddExpense };

class App extends PureComponent {
  state = { view: 'MainPage' }

  render() {
    const View = views[this.state.view];
    return (
      <div className="wrapper">
        <View
          goToMainPage={this.goToMainPage}
          goToManageBudgets={this.goToManageBudgets}
          goToAddExpense={this.goToAddExpense}
        />
      </div>
    );
  }

  goTo = (view) => this.setState({ view })
  goToMainPage = () => this.goTo('MainPage')
  goToManageBudgets = () => this.goTo('ManageBudgets')

  goToAddExpense = () => this.goTo('AddExpense')
}

export default App;
