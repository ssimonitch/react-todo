import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export class AddTodo extends Component {

  handleSubmit(e) {
    e.preventDefault();

    const { dispatch } = this.props;

    const todoText = this.textInput.value;
    if (todoText.length < 1) {
      return;
    } else {
      this.textInput.value = '';
      dispatch(actions.addTodo(todoText));
    }
  }

  render() {

    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit.bind(this)} >
          <input type="text" ref={input => this.textInput = input} placeholder="new todo"/>
          <button className="button expanded">Submit</button>
        </form>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(AddTodo);
