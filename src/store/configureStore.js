import { createStore, combineReducers } from 'redux';

import { searchTextReducer, showCompletedReducer, todosReducer } from '../reducers/reducers';

const reducer = combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});

export const store = createStore(reducer, {});
