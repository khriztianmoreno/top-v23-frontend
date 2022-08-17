import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { verify } from '../services/auth';

const VerifyAccount = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      const data = await verify(token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('profile', JSON.stringify(data.profile));
      navigate('/');
    };

    verifyAccount();
  }, []);

  return (
    <div className="login-page">
      <main>
        <div className="login-block">
          <img src="../img/logo.png" alt="Logo" />
          <h1>Activate your account</h1>
        </div>
      </main>
    </div>
  );
};

export default VerifyAccount;
