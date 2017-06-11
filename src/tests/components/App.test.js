import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import App from '../../components/App';
import { TodoList } from '../../components/TodoList';

import { store } from '../../store/configureStore';

describe('App', () => {

  // define todoApp and todo
  let todoApp;
  let todo;

  // mount todoApp component and reset state
  beforeEach(() => {
    todoApp = mount(<Provider store={store}><App /></Provider>)
  });

  // Define tests
  it('should not explode', () => {
    todoApp;
  });

  it('should render TodoList', () => {
    let todoList = todoApp.find(TodoList)
    expect(todoList.length).toEqual(1);
  });
});
