import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({ handleAddTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Date.now(),
      text: value,
      isCompleted: false,
    };

    handleAddTodo(todo);
  };

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="task"
        onChange={handleChange}
        placeholder="Enter a new todo"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
};

export default TodoForm;
