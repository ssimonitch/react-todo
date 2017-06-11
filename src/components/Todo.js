import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions/actions';

import moment from 'moment';

import '../styles/app.css';

export class Todo extends Component {
  render() {

    const { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';

    const renderDate = () => {
      let message = 'Created ';
      let timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return `${message} ${moment.unix(timestamp).format('MMM Do YYYY @ h:mm a')}`;
    };

    return (
      <div className={todoClassName} onClick={() => {
        // this.props.onToggle(id);
        dispatch(actions.toggleTodo(id));
      }}>
        <input type="checkbox" defaultChecked={completed} />
        <p>{text}</p>
        <p className="todo__subtext">{renderDate()}</p>
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  createdAt: PropTypes.number.isRequired,
  completedAt: PropTypes.number,
};

export default connect()(Todo);
