import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

import '../styles/app.css';

export default class App extends Component {

  render() {
    return (
      <div className="app">
        <div className="container">
            <TodoSearch />
            <TodoList />
            <AddTodo />
        </div>
      </div>
    );
  }
}
