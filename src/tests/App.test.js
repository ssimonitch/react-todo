import React from 'react';
import { mount } from 'enzyme';

import App from '../components/App';

describe('App', () => {

  let todoApp;

  beforeEach(() => {
    todoApp = mount(<App />);
  });

  it('renders without crashing', () => {
    todoApp;
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = "Test";
    todoApp.instance().handleAddTodo(todoText);

    // get last item in todos array as object
    let newTodo = todoApp.instance().state.todos.slice(-1)[0]

    expect(newTodo.text).toBe(todoText);
  });

  it('should toggle completed value when handleToggle called', () => {
    todoApp.instance().setState({
      todos: [
        { id: "random", text: 'Testing', completed: false }
      ]
    });

    let todo = todoApp.instance().state.todos[0];
    expect(todo.completed).toBe(false);
    todoApp.instance().handleToggle("random");
    expect(todo.completed).toBe(true);
  });

});
