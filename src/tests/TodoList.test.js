import React from 'react';
import { shallow } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'

import TodoList from '../components/TodoList';
import Todo from '../components/Todo';

const todos = [
  { id: 1, text: "Walk the dog" },
  { id: 2, text: "Walk the cat" }
]

describe('TodoList', () => {

  it('renders without crashing', () => {
    shallow(<TodoList todos={todos} />);
  });

  it('should render one Todo component for each todo item', () => {
    const wrapper = shallow(<TodoList todos={todos}/>);

    let todoList = wrapper.render(<TodoList todos={todos}/>);
    let todosComponents = wrapper.find(Todo);

    expect(todosComponents.length).toBe(todos.length);
  });

});
