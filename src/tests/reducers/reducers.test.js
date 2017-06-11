import React from 'react';

import * as reducers from '../../reducers/reducers';

describe('Reducers', () => {

  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Some search text!'
      }
      const res = reducers.searchTextReducer('', action);
      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED',
      }
      const res = reducers.showCompletedReducer(false, action);
      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      const action = {
        type: 'ADD_TODO',
        text: 'Hi Bob'
      }
      const res = reducers.todosReducer([], action);
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it('should should toggle todo completed status', () => {
      const action = {
        type: 'TOGGLE_TODO',
        id: 50
      }

      let mockTodo = {
        id: 50,
        text: "Hi",
        completed: false,
        createdAt: 1987,
        completedAt: undefined
      }

      const res = reducers.todosReducer([mockTodo], action);

      expect(res[0].completed).toEqual(true);
      expect(typeof(res[0].completedAt)).toBe('number');
    });
  });
});
