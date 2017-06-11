import React from 'react';
import { mount } from 'enzyme';
import uuid from 'node-uuid';

import { Todo } from '../../components/Todo';

describe('Todo', () => {

  let todo;
  let spy = jest.fn();

  let todoData = {
    id: "random",
    text: 'Testing',
    completed: false,
    createdAt: 0,
    completedAt: undefined
  }

  beforeEach(() => {
    todo = mount(<Todo {...todoData} dispatch={spy} />);
  });

  it('renders without crashing', () => {
    todo;
  });

  it('should dispatch TOGGLE_TODO action on click', () => {
    let input = todo.find('input').first();
    todo.simulate('click', input);

    expect(spy).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      id: todoData.id
    });
  });

});
