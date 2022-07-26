import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getJobs } from '../../services/jobs';
import JobElement from './JobElement';

const RecentJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getJobs();
      setJobs(result);
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          {
            jobs.map((job) => (
              <JobElement key={job.id} job={job} />
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
  );
};

export default RecentJobs;
