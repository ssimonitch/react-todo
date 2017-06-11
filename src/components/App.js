import React, { Component } from 'react';
import uuid from 'node-uuid';
import moment from 'moment';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';
import TodoAPI from '../utils/TodoAPI';

import '../styles/app.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidUpdate () {
    TodoAPI.setTodos(this.state.todos);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    });
  }

  handleSearch (searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    });
  }

  handleFilter (isChecked) {
    this.setState({
      showCompleted: isChecked
    });
  }

  // handleToggle (id) {
  //   let updatedTodos = this.state.todos.map(todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       todo.completedAt = todo.completed ? moment().unix() : undefined;
  //     }
  //     return todo;
  //   });
  //
  //   this.setState({todos: updatedTodos});
  // }

  render() {
    // const {todos, showCompleted, searchText} = this.state;
    // const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div className="app">
        <div className="container">
            <TodoSearch onSearch={this.handleSearch.bind(this)} onFilter={this.handleFilter.bind(this)}/>
            <TodoList />
            <AddTodo />
        </div>
      </div>
    );
  }
}
