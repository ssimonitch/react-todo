import React, { Component } from 'react';

import TodoList from './TodoList';
import AddTodo from './AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Walk the dog" },
        { id: 2, text: "Walk the cat" },
        { id: 3, text: "Walk the bird" },
        { id: 4, text: "Walk the goat" },
      ]
    }
  }

  handleAddTodo (text) {
    alert(`Added todo: ${text}`);
  }

  render() {
    const { todos } = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
}

export default App;
