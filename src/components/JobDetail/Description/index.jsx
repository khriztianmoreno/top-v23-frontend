import { Link } from 'react-router-dom';

const JobDescription = () => (
  <div className="container">
    <div className="header-detail">
      <img className="logo" src="/img/logo-google.jpg" alt="google Logo" />
      <div className="hgroup">
        <h1>Senior front-end developer</h1>
        <h3>
          <a href="/">Google</a>
        </h3>
      </div>
      <time>2 days ago</time>
      <hr />
      <p className="lead">
        You will help Google build next-generation web applications like Gmail,
        Google Docs, Google Analytics, and the Google eBookstore and eBook
        readers. As a Front End Engineer at Google, you will specialize in
        building responsive and elegant web UIs with AJAX and similar
        technologies. You may design or work on frameworks for building scalable
        frontend applications. We are looking for engineers who are passionate
        about and have experience building leading-edge user experience,
        including dynamic consumer experiences.
      </p>

      <ul className="details cols-3">
        <li>
          <i className="fa fa-map-marker" />
          <span>Menlo Park, CA</span>
        </li>

        <li>
          <i className="fa fa-briefcase" />
          <span>Full time</span>
        </li>

        <li>
          <i className="fa fa-money" />
          <span>$90,000 - $110,000 / year</span>
        </li>

        <li>
          <i className="fa fa-clock-o" />
          <span>40h / week</span>
        </li>

        <li>
          <i className="fa fa-flask" />
          <span>2+ years experience</span>
        </li>

        <li>
          <i className="fa fa-certificate" />
          <a href="/">Master or Bachelor</a>
        </li>
      </ul>

      <div className="button-group">
        <ul className="social-icons">
          <li className="title">Share on</li>
          <li>
            <a className="facebook" href="/">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a className="google-plus" href="/">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a className="twitter" href="/">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a className="linkedin" href="/">
              <i className="fa fa-linkedin" />
            </a>
          </li>
        </ul>

        <div className="action-buttons">
          <Link className="btn btn-primary" to="/">
            Apply with linkedin
          </Link>
          <Link className="btn btn-success" to="/jobs/apply/1020">
            Apply now
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default JobDescription;
