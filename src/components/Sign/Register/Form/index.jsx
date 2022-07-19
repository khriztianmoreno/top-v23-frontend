import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faUser,
} from '@fortawesome/fontawesome-free-solid';

const FormRegister = () => (
  <form>
    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <FontAwesomeIcon icon={faUser} size="1x" />
        </span>
        <input
          id="name"
          type="text"
          className="form-control"
          placeholder="Your name"
          required
        />
      </div>
    </div>

    <hr className="hr-xs" />

    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <FontAwesomeIcon icon={faEnvelope} size="1x" />
        </span>
        <input
          id="email"
          type="email"
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
    </div>

    <hr className="hr-xs" />

    <div className="form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <FontAwesomeIcon icon={faLock} size="1x" />
        </span>
        <input
          id="password"
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />
      </div>
    </div>

    <button className="btn btn-primary btn-block" type="submit">
      Login
    </button>
  </form>
);

export default FormRegister;
