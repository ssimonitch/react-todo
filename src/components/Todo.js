import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Todo extends Component {
  render() {

    const { id, text, completed } = this.props;

    return (
      <div onClick={() => {
        this.props.onToggle(id);
      }}>
        <input type="checkbox" defaultChecked={completed} />
        {text}
      </div>
    );
  }
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};
