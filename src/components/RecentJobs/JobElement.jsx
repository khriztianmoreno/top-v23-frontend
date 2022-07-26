import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const JobElement = ({ job }) => (
  <div className="col-xs-12">
    <Link className="item-block" to={`/jobs/detail/${job.id}`}>
      <header>
        <img src={job.image} alt={job.title} />
        <div className="hgroup">
          <h4>{job.title}</h4>
          <h5>{job.company}</h5>
        </div>
        <div className="header-meta">
          <span className="location">{job.location}</span>
          <span className={`label ${job.className}`}>{job.type}</span>
        </div>
      </header>
    </Link>
  </div>
);

JobElement.propTypes = {
  /**
   * Job object
   */
  job: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  }),
};

JobElement.defaultProps = {
  job: {},
};

export default JobElement;
