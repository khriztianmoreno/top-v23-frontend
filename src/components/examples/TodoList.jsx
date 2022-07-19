import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({ tasks, handleTodo }) => (
  <ul>
    {tasks.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        text={todo.text}
        isCompleted={todo.isCompleted}
        handleTodo={handleTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  handleTodo: PropTypes.func.isRequired,
};

export default TodoList;
