import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobItem = ({ job }) => (
  <div className="col-xs-12">
    <Link className="item-block" to={`/jobs/detail/${job.id}`}>
      <header>
        <img src={job.image} alt="logo" />
        <div className="hgroup">
          <h4>{job.title}</h4>
          <h5>
            {`${job.company} `}
            <span className={`label ${job.className}`}>{job.type}</span>
          </h5>
        </div>
        <time>{job.ago}</time>
      </header>

      <div className="item-body">
        <p>{job.summary}</p>
      </div>

      <footer>
        <ul className="details cols-3">
          <li>
            <i className="fa fa-map-marker" />
            <span>{job.location}</span>
          </li>

          <li>
            <i className="fa fa-money" />
            <span>{job.salary}</span>
          </li>

          <li>
            <i className="fa fa-certificate" />
            <span>{job.certificate}</span>
          </li>
        </ul>
      </footer>
    </Link>
  </div>
);

JobItem.defaultProps = {
  job: {
    id: '',
    title: '',
    company: '',
    type: '',
    image: '',
    location: '',
    salary: '',
    certificate: '',
    summary: '',
    ago: '',
    className: '',
  },
};
JobItem.propTypes = {
  job: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    company: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    location: PropTypes.string,
    salary: PropTypes.string,
    certificate: PropTypes.string,
    summary: PropTypes.string,
    ago: PropTypes.string,
    className: PropTypes.string,
  }),
};

export default JobItem;
