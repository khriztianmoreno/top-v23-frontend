import PropTypes from 'prop-types';

const Title = ({ title, getValue }) => {
  const username = 'Yo soy el hijo';

  const handleClick = () => {
    getValue(username);
  };

  return (
    <div className="title">
      <h1>{title}</h1>

      <button type="button" onClick={handleClick}>
        Haga click aqui
      </button>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  getValue: PropTypes.func.isRequired,
};

export default Title;
