import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'

import { AddTodo } from '../../components/AddTodo';

describe('AddTodo', () => {

  let addTodo;
  let spy = jest.fn()

  beforeEach(() => {
    spy.mockReset();
    addTodo = mount(<AddTodo dispatch={spy} />);
  });

  it('renders without crashing', () => {
    addTodo;
  });

  it('should dispatch ADD_TODO when valid todo text', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Test'
    }

    const form = addTodo.find('form').first();
    const input = addTodo.find('input').first();
    input.node.value = 'Test';
    input.simulate('change', input)
    form.simulate('submit');

    expect(spy).toBeCalledWith(action);
  });

  it('should not dispatch ADD_TODO when invalid todo text', () => {

    const form = addTodo.find('form').first();
    const input = addTodo.find('input').first();
    input.node.value = '';
    input.simulate('change', input)
    form.simulate('submit');

    expect(spy).not.toHaveBeenCalled();
  });
});
