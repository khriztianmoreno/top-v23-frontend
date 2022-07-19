import PropTypes from 'prop-types';

const Header = ({ children, className, backgroundImage }) => (
  <header className={className} style={{ backgroundImage }}>
    {children}
  </header>
);

Header.defaultProps = {
  className: 'site-header size-lg text-center',
  backgroundImage: 'url(/img/bg-banner1.jpg)',
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  backgroundImage: PropTypes.string,
};

export default Header;
