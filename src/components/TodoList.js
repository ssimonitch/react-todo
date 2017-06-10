import React, { Component } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  render () {

    const {todos} = this.props;

    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} />
        );
      });
    }

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
};
