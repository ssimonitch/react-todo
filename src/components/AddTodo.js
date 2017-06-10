import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();
    const todoText = this.textInput.value;
    if (todoText.length < 1) {
      return;
    } else {
      this.props.onAddTodo(todoText);
    }
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input type="text" ref={input => this.textInput = input} placeholder="new todo"/>
        <button>Submit</button>
      </form>
    );
  }
}

AddTodo.propTypes = {
  onAddTodo: PropTypes.func.isRequired
};
