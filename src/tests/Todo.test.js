import React from 'react';
import { mount } from 'enzyme';
import uuid from 'node-uuid';

import Todo from '../components/Todo';

describe('Todo', () => {

  let onToggle = jest.fn();
  let todo;

  beforeEach(() => {
    todo = mount(<Todo id={"random"} text={"test"} completed={false} onToggle={onToggle}/>);
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
