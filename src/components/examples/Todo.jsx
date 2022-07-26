import PropTypes from 'prop-types';

const Todo = (props) => {
  const {
    text, isCompleted, handleTodo, id,
  } = props;

  const handleClick = () => {
    handleTodo(id);
  };

  return (
    <li>
      {/* <input type="checkbox" onChange={handleClick} /> */}

      <button type="button" onClick={handleClick}>
        {isCompleted ? '✅' : '❌'}
      </button>
      <span>{text}</span>
    </li>
  );
};

Todo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  handleTodo: PropTypes.func.isRequired,
};

export default Todo;
