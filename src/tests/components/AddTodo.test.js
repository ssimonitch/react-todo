import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'

import AddTodo from '../../components/AddTodo';

describe('AddTodo', () => {

  let onAddTodo;
  let addTodo;

  beforeEach(() => {
    onAddTodo = jest.fn();
    addTodo = mount(<AddTodo onAddTodo={onAddTodo} />);
  });

  it('renders without crashing', () => {
    addTodo;
  });

  it('should call onAddTodo prop with valid data', () => {
    const form = addTodo.find('form').first();
    const input = addTodo.find('input').first();
    input.node.value = 'Test';
    input.simulate('change', input)
    form.simulate('submit');

    expect(onAddTodo).toBeCalledWith("Test");
  });

});
