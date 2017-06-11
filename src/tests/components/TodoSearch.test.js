import React from 'react';
import { mount } from 'enzyme';

import { TodoSearch } from '../../components/TodoSearch';

describe('TodoSearch', () => {

  let todoSearch;
  let spy = jest.fn();

  beforeEach(() => {
    todoSearch = mount(<TodoSearch dispatch={spy} />);
  });

  it('renders without crashing', () => {
    todoSearch;
  });

  it('should dispatch SET_SEARCH_TEXT on input change', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Test'
    }

    const input = todoSearch.find('input').first();
    input.node.value = 'Test';
    input.simulate('change', input)
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }

    const checkbox = todoSearch.find('#filter');
    checkbox.simulate('change', { target: { checked: true } });
    expect(spy).toHaveBeenCalledWith(action);
  });

});
