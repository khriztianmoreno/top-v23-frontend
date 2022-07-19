import { useEffect, useState } from 'react';

import socket from '../utils/socket';

const TodosPage = (props) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // socket.on('todos', (todos) => {
    //   setTodos(todos);
    // });

    socket.emit('connection', 'cristian');
  }, []);

  useEffect(() => {
    socket.on('todos', (todos) => {
      setTodos(todos);
    });

    return () => {
      socket.off('todos');
    };
  }, []);

  return <div>{props.children}</div>;
};

export default TodosPage;
