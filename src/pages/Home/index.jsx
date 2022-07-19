import Navigation from '../../components/Navigation';
import Header from '../../components/Header';
import RecentJobs from '../../components/RecentJobs';
import Footer from '../../components/Footer';

const Home = () => (
  <div className="nav-on-header smart-nav">
    <Navigation />

    <Header
      className="site-header size-lg text-center"
      backgroundImage="url(/img/bg-banner1.jpg)"
    >
      <div className="container">
        <div className="col-xs-12">
          <br />

          <br />
          <h2>
            We offer
            <mark> 1,259 </mark>
            job vacancies right now!
          </h2>
          <h5 className="font-alt">Find your desire one in a minute</h5>
          <br />
          <br />

          <br />
          <form className="header-job-search">
            <div className="input-keyword">
              <input
                type="text"
                className="form-control"
                placeholder="Job title, skills, or company"
              />
            </div>

            <div className="input-location">
              <input
                type="text"
                className="form-control"
                placeholder="City, state or zip"
              />
            </div>

            <div className="btn-search">
              <button className="btn btn-primary" type="submit">
                Find jobs
              </button>
              <a href="job-list.html">Advanced Job Search</a>
            </div>
          </form>
        </div>
      </div>
    </Header>

    <main>
      <RecentJobs />
    </main>

    <Footer />
  </div>
);

export default Home;
