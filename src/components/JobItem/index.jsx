
function JobItem() {
  return (
    <div className="col-xs-12">
      <a className="item-block" href="job-detail.html">
        <header>
          <img src="img/logo-google.jpg" alt="" />
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
  )
}

export default JobItem;
