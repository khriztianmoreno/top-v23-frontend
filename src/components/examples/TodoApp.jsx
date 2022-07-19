import { useState } from 'react';

import TodoList from './TodoList';
import TodoForm from './TodoForm';

const todos = [
  {
    id: 1,
    text: 'Learn React',
    isCompleted: false,
  },
  {
    id: 2,
    text: 'Learn Redux',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn React Router',
    isCompleted: false,
  },
];

const TodoApp = () => {
  const [tasks, setTasks] = useState(todos);

  const handleTodo = (id) => {
    const tasksUpdated = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasks(tasksUpdated);
  };

  const handleAddTodo = (todo) => {
    setTasks([...tasks, todo]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm handleAddTodo={handleAddTodo} />
      <br />
      <TodoList tasks={tasks} handleTodo={handleTodo} />
    </div>
  );
};

export default TodoApp;
