
const styles = {
  backgroundImage: 'url(img/bg-banner1.jpg)',
}

function HomePage() {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar">
        <div className="container">

          {/* Logo */}
          <div className="pull-left">
            <a className="navbar-toggle" href="#" data-toggle="offcanvas"><i className="ti-menu"></i></a>

            <div className="logo-wrapper">
              <a className="logo" href="index.html"><img src="img/logo.png" alt="logo" /></a>
              <a className="logo-alt" href="index.html"><img src="img/logo-alt.png" alt="logo-alt" /></a>
            </div>

          </div>
          {/* Logo */}

          <div className="pull-right user-login">
            <a className="btn btn-sm btn-primary" href="user-login.html">Login</a> or <a href="user-register.html">register</a>
          </div>

          <ul className="nav-menu">
            <li>
              <a className="active" href="index.html">Home</a>
              <ul>
                <li><a className="active" href="index.html">Version 1</a></li>
                <li><a href="index-2.html">Version 2</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Position</a>
              <ul>
                <li><a href="job-list-1.html">Browse jobs - 1</a></li>
                <li><a href="job-list-2.html">Browse jobs - 2</a></li>
                <li><a href="job-list-3.html">Browse jobs - 3</a></li>
                <li><a href="job-detail.html">Job detail</a></li>
                <li><a href="job-apply.html">Apply for job</a></li>
                <li><a href="job-add.html">Post a job</a></li>
                <li><a href="job-manage.html">Manage jobs</a></li>
                <li><a href="job-candidates.html">Candidates</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Resume</a>
              <ul>
                <li><a href="resume-list.html">Browse resumes</a></li>
                <li><a href="resume-detail.html">Resume detail</a></li>
                <li><a href="resume-add.html">Create a resume</a></li>
                <li><a href="resume-manage.html">Manage resumes</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Company</a>
              <ul>
                <li><a href="company-list.html">Browse companies</a></li>
                <li><a href="company-detail.html">Company detail</a></li>
                <li><a href="company-add.html">Create a company</a></li>
                <li><a href="company-manage.html">Manage companies</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
                <li><a href="page-blog.html">Blog</a></li>
                <li><a href="page-post.html">Blog-post</a></li>
                <li><a href="page-about.html">About</a></li>
                <li><a href="page-contact.html">Contact</a></li>
                <li><a href="page-faq.html">FAQ</a></li>
                <li><a href="page-pricing.html">Pricing</a></li>
                <li><a href="page-typography.html">Typography</a></li>
                <li><a href="page-ui-elements.html">UI elements</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </nav>

      <header className="site-header size-lg text-center" style={styles}>
        <div className="container">
          <div className="col-xs-12">
            <br/><br/>
            <h2>We offer <mark>1,259</mark> job vacancies right now!</h2>
            <h5 className="font-alt">Find your desire one in a minute</h5>
            <br/><br/><br/>
            <form className="header-job-search">
              <div className="input-keyword">
                <input type="text" className="form-control" placeholder="Job title, skills, or company"/>
              </div>

              <div className="input-location">
                <input type="text" className="form-control" placeholder="City, state or zip"/>
              </div>

              <div className="btn-search">
                <button className="btn btn-primary" type="submit">Find jobs</button>
                <a href="job-list.html">Advanced Job Search</a>
              </div>
            </form>
          </div>

        </div>
      </header>

      <main>
        <section>
          <div className="container">
            <header className="section-header">
              <span>Latest</span>
              <h2>Recent jobs</h2>
            </header>

            <div className="row item-blocks-connected">

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

              <div className="col-xs-12">
                <a className="item-block" href="job-detail.html">
                  <header>
                    <img src="img/logo-linkedin.png" alt="" />
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
                <a className="item-block" href="job-detail.html">
                  <header>
                    <img src="img/logo-envato.png" alt="" />
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
                <a className="item-block" href="job-detail.html">
                  <header>
                    <img src="img/logo-facebook.png" alt="" />
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
                <a className="item-block" href="job-detail.html">
                  <header>
                    <img src="img/logo-microsoft.jpg" alt="" />
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

            <br/><br/>
            <p className="text-center"><a className="btn btn-info" href="job-list.html">Browse all jobs</a></p>
          </div>
        </section>
      </main>
      <footer className="site-footer">


      </footer>
    </div>
  );
}

export default HomePage;
