import { Link } from 'react-router-dom';

const RecentJobs = () => (
  <section>
    <div className="container">
      <header className="section-header">
        <span>Latest</span>
        <h2>Recent jobs</h2>
      </header>

      <div className="row item-blocks-connected">
        <div className="col-xs-12">
          <a className="item-block" href="/">
            <header>
              <img src="./img/logo-google.jpg" alt="" />
              <div className="hgroup">
                <h4>Senior front-end developer</h4>
                <h5>Google</h5>
              </div>
              <div className="header-meta">
                <span className="location">Menlo park, CA</span>
                <span className="label label-success">Full-time</span>
              </div>
            </header>
          </a>
        </div>

        <div className="col-xs-12">
          <a className="item-block" href="/">
            <header>
              <img src="./img/logo-linkedin.png" alt="" />
              <div className="hgroup">
                <h4>Software Engineer (Entry or Senior)</h4>
                <h5>Linkedin</h5>
              </div>
              <div className="header-meta">
                <span className="location">Livermore, CA</span>
                <span className="label label-warning">Part-time</span>
              </div>
            </header>
          </a>
        </div>

        <div className="col-xs-12">
          <a className="item-block" href="/">
            <header>
              <img src="./img/logo-envato.png" alt="" />
              <div className="hgroup">
                <h4>Full Stack Web Developer</h4>
                <h5>Envato</h5>
              </div>
              <div className="header-meta">
                <span className="location">San Francisco, CA</span>
                <span className="label label-info">Freelance</span>
              </div>
            </header>
          </a>
        </div>

        <div className="col-xs-12">
          <a className="item-block" href="/">
            <header>
              <img src="./img/logo-facebook.png" alt="" />
              <div className="hgroup">
                <h4>Web Applications Developer</h4>
                <h5>Facebook</h5>
              </div>
              <div className="header-meta">
                <span className="location">Lexington, MA</span>
                <span className="label label-danger">Internship</span>
              </div>
            </header>
          </a>
        </div>

        <div className="col-xs-12">
          <a className="item-block" href="/">
            <header>
              <img src="/img/logo-microsoft.jpg" alt="" />
              <div className="hgroup">
                <h4>Sr. SQL Server Developer</h4>
                <h5>Microsoft</h5>
              </div>
              <div className="header-meta">
                <span className="location">Palo Alto, CA</span>
                <span className="label label-success">Remote</span>
              </div>
            </header>
          </a>
        </div>
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

export default RecentJobs;
