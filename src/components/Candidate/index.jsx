import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Candidate = ({ profile }) => (
  <div className="col-xs-12">
    <div className="item-block">
      <header>
        <Link to={`/resume/${profile.id}`}>
          <img
            className="resume-avatar"
            src={profile.image}
            alt={`${profile.name}`}
          />
        </Link>
        <div className="hgroup">
          <h4>
            <Link to={`/resume/${profile.id}`}>{profile.name}</Link>
            <select className="btn-group bootstrap-select form-control label-style">
              <option
                data-content="<span className='label label-default'>New</span>"
                defaultValue
              >
                New
              </option>
              <option data-content="<span className='label label-warning'>Contacted</span>">
                Contacted
              </option>
              <option data-content="<span className='label label-info'>Interviewed</span>">
                Interviewed
              </option>
              <option data-content="<span className='label label-success'>Hired</span>">
                Hired
              </option>
              <option data-content="<span className='label label-danger'>Archived</span>">
                Archived
              </option>
            </select>
          </h4>
          <h5>{profile.title}</h5>
        </div>
        <div className="header-meta">
          <span className="location">{profile.location}</span>
          <span className="rate">{profile.rate}</span>
        </div>
      </header>

      <footer>
        <div className="status">
          <strong>Applied on: </strong>
          {profile.applied}
        </div>

        <div className="action-btn">
          <a className="btn btn-xs btn-gray" href="/">
            Download CV
          </a>
          <a className="btn btn-xs btn-gray" href="/">
            Contact
          </a>
          <a className="btn btn-xs btn-danger" href="/">
            Delete
          </a>
        </div>
      </footer>
    </div>
  </div>
);

Candidate.defaultProps = {
  profile: {
    id: '',
    title: '',
    name: '',
    image: '',
    location: '',
    rate: '',
    applied: '',
  },
};

Candidate.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    rate: PropTypes.string,
    applied: PropTypes.string,
  }),
};

export default Candidate;
