import React, { Component } from 'react';
import uuid from 'node-uuid';

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        { id: uuid(), text: 'walk the dog', completed: false },
        { id: uuid(), text: 'walk the dog', completed: true },
        { id: uuid(), text: 'walk the dog', completed: false },
        { id: uuid(), text: 'walk the dog', completed: true },
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo (text) {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuid(),
          text,
          completed: false
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

  handleToggle (id) {
    let updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({todos: updatedTodos});
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} onFilter={this.handleFilter.bind(this)}/>
        <TodoList todos={todos} onToggle={this.handleToggle.bind(this)}/>
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
