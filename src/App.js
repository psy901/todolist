import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';
import todoApp from './reducers';
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions';

class App extends Component {
  render() {
   return(
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
   );
  }
}

export default App;
