import React, { Component } from 'react';

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
        { id: 1, text: 'walk the dog' },
        { id: 2, text: 'walk the dog' },
        { id: 3, text: 'walk the dog' },
        { id: 4, text: 'walk the dog' },
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo (text) {
    alert(text);
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

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch.bind(this)} onFilter={this.handleFilter.bind(this)}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo.bind(this)}/>
      </div>
    );
  }
}

export default App;
