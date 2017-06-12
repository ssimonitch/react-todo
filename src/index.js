import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import TodoAPI from './utils/TodoAPI';

import './styles/app.css';

import * as actions from './actions/actions';
import { store } from './store/configureStore';

import './playground/firebase/';

store.subscribe(() => {
  let state = store.getState();
  TodoAPI.setTodos(state.todos);
});

const initalTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initalTodos));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
