import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import ReactTestUtils from 'react-dom/test-utils'
import $ from 'jquery';

import AddTodo from '../components/AddTodo';

describe('AddTodo', () => {

  let f;
  let addTodo;

  beforeEach(() => {
    f = jest.fn();
    addTodo = mount(<AddTodo onAddTodo={f} />);
  });

  it('renders without crashing', () => {
    shallow(<AddTodo />);
  });

  // it('should call onAddTodo prop with valid data', () => {
  //   const form = addTodo.find('form').first();
  //   const input = addTodo.find('input').first();
  //   input.simulate('change')
  //   form.simulate('submit');
  //   expect(f).toBeCalledWith("Spy");
  // });

});
