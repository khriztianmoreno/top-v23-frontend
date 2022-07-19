const ApplicantsFor = () => (
  <header
    className="page-header bg-img size-lg"
    style={{ backgroundImage: 'url(./img/bg-banner1.jpg)' }}
  >
    <div className="container page-name">
      <h1 className="text-center">Job Candidates</h1>
      <p className="lead text-center">
        Use following search box to find best candidates for your openning
        position
      </p>
    </div>

    <div className="container">
      <h5>Applicants for</h5>
      <a className="item-block item-block-flat" href="job-detail.html">
        <header>
          <img src="./img/logo-google.jpg" alt="Logo Google" />
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

      <hr />

      <h5>Search</h5>
      <form action="#">
        <div className="row">
          <div className="form-group col-xs-12 col-sm-4">
            <input type="text" className="form-control" placeholder="Keyword" />
          </div>

          <div className="form-group col-xs-12 col-sm-4">
            <select className="btn-group bootstrap-select show-tick form-control dropup">
              <option defaultValue>All statuses</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Interviewed</option>
              <option>Hired</option>
              <option>Archived</option>
            </select>
          </div>

          <div className="form-group col-xs-12 col-sm-4">
            <select className="form-control selectpicker">
              <option defaultValue>Newest first</option>
              <option>Oldest first</option>
              <option>Low salary first</option>
              <option>High salary first</option>
              <option>Sort by name</option>
            </select>
          </div>
        </div>

        <div className="button-group">
          <div className="action-buttons">
            <button type="button" className="btn btn-success">
              Download CSV
            </button>
            <button type="button" className="btn btn-primary">
              Apply filter
            </button>
          </div>
        </div>
      </form>
    </div>
  </header>
);

export default ApplicantsFor;
