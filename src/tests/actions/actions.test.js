import React from 'react';

import * as actions from '../../actions/actions';

describe('Actions', () => {

  it('shoulds generate search text action', () => {

    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    let res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('shoulds generate search text action', () => {

    let action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    }

    let res = actions.addTodo(action.text);
    expect(res).toEqual(action);
  });

  it('should show completed on toggle', () => {

    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    let res = actions.toggleShowCompleted(action);
    expect(res).toEqual(action);
  });

  it('should toggle completed status of todo', () => {

    let action = {
      type: 'TOGGLE_TODO',
      id: 50
    }

    let res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });
});
