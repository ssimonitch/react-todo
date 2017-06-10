import React from 'react';
import { mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'

import TodoList from '../components/TodoList';
import Todo from '../components/Todo';

describe('TodoList', () => {

  let todosData = [
    { id: "asd", text: "Walk the dog", completed: true },
    { id: "asdd", text: "Walk the cat", completed: false }
  ]

  let onToggle;
  let todoList;

  beforeEach(() => {
    onToggle = jest.fn();
    todoList = mount(<TodoList todos={todosData} onToggle={onToggle}/>);
  });

  it('renders without crashing', () => {
    todoList;
  });

  it('should render one Todo component for each todo item', () => {
    let todosComponents = todoList.find(Todo);

    expect(todosComponents.length).toBe(todosData.length);
  });

});
