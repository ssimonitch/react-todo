import React from 'react';
import { mount } from 'enzyme';
import uuid from 'node-uuid';

import Todo from '../../components/Todo';

describe('Todo', () => {

  let todo;
  let onToggle = jest.fn();

  let todoData = {
    id: "random",
    text: 'Testing',
    completed: false,
    createdAt: 0,
    completedAt: undefined
  }

  beforeEach(() => {
    todo = mount(<Todo {...todoData} onToggle={onToggle} />);
  });

  it('renders without crashing', () => {
    todo;
  });

  it('should call onToggle prop with id on click', () => {
    let input = todo.find('input').first();
    todo.simulate('click', input);
    expect(onToggle).toHaveBeenCalledWith("random");
  });

});
