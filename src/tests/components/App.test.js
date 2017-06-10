import React from 'react';
import { mount } from 'enzyme';

import App from '../../components/App';

describe('App', () => {

  // define todoApp and todo
  let todoApp;
  let todo;

  // define dummy todo data
  let todoData = {
    id: "random",
    text: 'Testing',
    completed: false,
    createdAt: 0,
    completedAt: undefined
  }

  // mount todoApp component and reset state
  beforeEach(() => {
    todoApp = mount(<App />);
    todoApp.instance().setState({
      todos: [todoData]
    });
    todo = todoApp.instance().state.todos[0]
  });

  // Define tests
  it('renders without crashing', () => {
    todoApp;
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    let todoText = "Test";
    todoApp.instance().handleAddTodo(todoText);

    // get last item in todos array as object
    let newTodo = todoApp.instance().state.todos.slice(-1)[0]

    expect(newTodo.text).toBe(todoText);
    expect(typeof(newTodo.createdAt)).toBe('number');
  });

  it('should toggle completed value when handleToggle called', () => {

    expect(todo.completed).toBe(false);

    todoApp.instance().handleToggle("random");
    expect(todo.completed).toBe(true);

    expect(typeof(todo.completedAt)).toBe('number');
  });

  // Test that when toggle from true to false, completedAt get removed
  it('should remove completedAt on toggle from true to false', () => {

    todoApp.instance().handleToggle("random");

    expect(todo.completed).toBe(false);
    expect(todo.completedAt).toBeUndefined();
  });

});
