import React from 'react';
import { mount } from 'enzyme';

import TodoSearch from '../../components/TodoSearch';

describe('TodoSearch', () => {

  let onSearch;
  let onFilter;
  let todoSearch;

  beforeEach(() => {
    onSearch = jest.fn();
    onFilter = jest.fn();
    todoSearch = mount(<TodoSearch onSearch={onSearch} onFilter={onFilter} />);
  });

  it('renders without crashing', () => {
    todoSearch;
  });

  it('should call onSearch with entered input text', () => {
    const input = todoSearch.find('input').first();
    input.node.value = 'Test';
    input.simulate('change', input)
    expect(onSearch).toHaveBeenCalledWith('Test');
  });

  it('should call onSearch with proper checked value', () => {
    const checkbox = todoSearch.find('#filter');
    checkbox.simulate('change', { target: { checked: true } });
    expect(onFilter).toHaveBeenCalledWith(true);
  });

});
