import Navigation from '../../components/Navigation';
import BrowseJobs from '../../components/BrowseJobs';
import JobItem from '../../components/JobItem';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

import jobs from '../../assets/data/jobs.json';

const JobsList = () => (
  <div className="nav-on-header smart-nav bg-alt">
    <Navigation />

    <BrowseJobs />

    <main>
      <section className="no-padding-top">
        <div className="container">
          <div className="row">
            {jobs.map((job) => (
              <JobItem key={job.id} job={job} />
            ))}
          </div>
          <Pagination />
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default JobsList;
