import PropTypes from 'prop-types';

const Description = ({ children }) => (
  <div className="title">
    <h1>{children}</h1>
  </div>
);

Description.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
};

export default Description;
