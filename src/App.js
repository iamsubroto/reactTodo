import React, { Component } from 'react';
import Greeting from './Component/Greeting'
import Todos from './Component/Todos'
import ActionTodos from './Component/ActionTodos'
import AppProvider from './context'


class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="App d-flex justify-content-center pt-3">
          <div className="card shadow-lg" style={{width: "30%"}}>
          <div className="card-header bg-dark">
            <Greeting />
          </div>
          <div className="card-body">
              <Todos />
              <ActionTodos />
          </div>
          </div>
        </div>
      </AppProvider>
    );
  }
}

export default App;
