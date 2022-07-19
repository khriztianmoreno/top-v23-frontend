import { useState } from 'react';
import { Link } from 'react-router-dom';

import { getJobs } from '../../services/jobs'

const RecentJobs = () => {
  const [jobs, setJobs] = useState(getJobs());

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {
            jobs.map(job => (
              <div className="col-xs-12" key={job.id}>
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
            ))
          }
        </div>

        <br />

        <br />
        <p className="text-center">
          <Link className="btn btn-info" to="/jobs">
            Browse all jobs
          </Link>
        </p>
      </div>
    </section>
  )
};

export default RecentJobs;
