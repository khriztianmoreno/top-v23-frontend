import PropTypes from 'prop-types';

import './styles.scss';

const HelloWorld = (props) => {
  const { name, age, hobbies, profile, sayHello, children } = props;

  if (sayHello) {
    sayHello();
  }

  const text = profile
    ? `My name is ${profile?.name} and I am ${profile?.age} years old.`
    : '';

  return (
    <div className="hello-world">
      <h1>Hello, World!</h1>

      {children}
      <p>{name}</p>
      <p>{age}</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={`hobby-${hobby}`}>{hobby}</li>
        ))}
      </ul>
      <p>{text}</p>
    </div>
  );
};

HelloWorld.propTypes = {
  /* Es el nombre del usuario */
  name: PropTypes.string,
  /* Es la edad del usuario */
  age: PropTypes.number,
  hobbies: PropTypes.arrayOf(PropTypes.string),
  profile: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
  }),
  sayHello: PropTypes.func,
  children: PropTypes.node,
};

HelloWorld.defaultProps = {
  name: '',
  age: 0,
  hobbies: [],
  profile: {},
  sayHello: () => {},
  children: null,
};

export default HelloWorld;
