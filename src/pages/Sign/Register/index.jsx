import { Link } from 'react-router-dom';

import Container from '../../../components/Sign/Register';

const Register = () => (
  <div className="login-page">
    <main>
      <div className="login-block">
        <img src="./img/logo.png" alt="Logo" />
        <h1>Log into your account</h1>

        <Container />
      </div>

      <div className="login-links">
        <p className="text-center">
          Already have an account?
          <span> </span>
          <Link to="/login" className="txt-brand">
            Login
          </Link>
        </p>
      </div>
    </main>
  </div>
);

export default Register;
