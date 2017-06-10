import React from 'react';
import { shallow } from 'enzyme';

import Todo from '../components/Todo';

describe('Todo', () => {

  it('renders without crashing', () => {
    shallow(<Todo />)
  });

});
