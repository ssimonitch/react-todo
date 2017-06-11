import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import ReactTestUtils from 'react-dom/test-utils'

import ConnectedTodoList, { TodoList } from '../../components/TodoList';
import ConnectedTodo, { Todo } from '../../components/Todo';

import * as actions from '../../actions/actions';
import { store } from '../../store/configureStore';

describe('TodoList', () => {

  let todoList;

  beforeEach(() => {
    todoList = mount(<Provider store={store}><ConnectedTodoList /></Provider>)
  });

  it('renders without crashing', () => {
    todoList;
  });

  it('should render one Todo component for each todo item', () => {
    store.dispatch(actions.addTodo('test1'));
    store.dispatch(actions.addTodo('test2'));

    let todoComponents = todoList.find(ConnectedTodo);
    expect(todoComponents.length).toBe(2);
  });

});
