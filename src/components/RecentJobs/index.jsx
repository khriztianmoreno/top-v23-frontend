import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import JobElement from './JobElement';

import { fetchJobList } from '../../store/actions/job';

const RecentJobs = () => {
  const jobs = useSelector((state) => state.job.jobList);
  const loading = useSelector((state) => state.ui.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobList());
  }, []);

  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">
          { loading ? <div className="col-md-12">Loading...</div> : null }
          {
            jobs.map((job) => (
              <JobElement key={job._id} job={job} />
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
