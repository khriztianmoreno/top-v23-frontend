import './styles.scss';

const LoginForm = () => {
  return(
    <div className="login-form">
      {/* title */}
      <div className="login-form__title">
        <h3>Login</h3>
      </div>

      <form>
        <div className="login-form__field">
          <label htmlFor="email"> Email </label>
          <input type="email" name="email" id="email" placeholder='Enter your email'/>
        </div>

        <div className="login-form__field">
          <label htmlFor="password"> Password  </label>
          <input type="password" name="password" id="password" />
        </div>
      </form>

      {/* button login */}

      <button className="login-form__button">
        Login
      </button>
      {/* link to register */}
    </div>
  )
}

export default LoginForm
