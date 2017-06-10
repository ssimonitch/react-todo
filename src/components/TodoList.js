import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

export default class TodoList extends Component {
  render () {

    const {todos} = this.props;

    const renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired
};
