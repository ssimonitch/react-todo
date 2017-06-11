import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo';
import TodoAPI from '../utils/TodoAPI';

import '../styles/app.css';

export class TodoList extends Component {
  render () {

    let { todos, showCompleted, searchText } = this.props;

    const renderTodos = () => {
      if (todos.length === 0) {
        return (
          <p className="container__message">Nothing to do</p>
        );
      }

      return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
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
  todos: PropTypes.array,
  showCompleted: PropTypes.bool,
  searchText: PropTypes.string
};

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(TodoList);
