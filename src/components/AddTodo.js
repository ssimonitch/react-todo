import React, { Component } from 'react';

export default class AddTodo extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
      <form onSubmit={this.handleSubmit} >
        <input type="text" ref={input => this.textInput = input} placeholder="new todo"/>
        <button>Submit</button>
      </form>
    );
  }
};
