const Header = () => (
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(/img/bg-banner1.jpg)' }}
  >
    <div className="container no-shadow">
      <h1 className="text-center">Apply for the job</h1>
      <p className="lead text-center">
        Apply with your online resume, create new resume for the job, or make a
        custom application.
      </p>

      <hr />
      <a className="item-block item-block-flat" href="job-detail.html">
        <header>
          <img src="/img/logo-google.jpg" alt="Logo" />
          <div className="hgroup">
            <h4>
              Senior front-end developer
            </h4>
            <h5>Google</h5>
          </div>
          <div className="header-meta">
            <span className="location">Menlo park, CA</span>
            <time>34 min ago</time>
          </div>
        </header>
      </a>

      <div className="button-group">
        <div className="action-buttons">
          <a className="btn btn-primary" href="#sec-resume">
            Apply now
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
