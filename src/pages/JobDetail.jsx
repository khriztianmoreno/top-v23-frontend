import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobDetail from "../components/JobDetail";

const styles = {
  backgroundImage: 'url(assets/img/bg-banner2.jpg)'
}

function JobDetailPage() {
  return (
    <div>
      <Navbar />
      <header className="page-header bg-img size-lg" style={styles}>
        <div className="container">
          <div className="header-detail">
            <img className="logo" src="assets/img/logo-google.jpg" alt="" />
            <div className="hgroup">
              <h1>Senior front-end developer</h1>
              <h3><a href="//">Google</a></h3>
            </div>
            <time dateTime="2016-03-03 20:00">2 days ago</time>
            <hr />
            <p className="lead">You will help Google build next-generation web applications like Gmail, Google Docs, Google Analytics, and the Google eBookstore and eBook readers. As a Front End Engineer at Google, you will specialize in building responsive and elegant web UIs with AJAX and similar technologies. You may design or work on frameworks for building scalable frontend applications. We are looking for engineers who are passionate about and have experience building leading-edge user experience, including dynamic consumer experiences.</p>

            <ul className="details cols-3">
              <li>
                <i className="fa fa-map-marker"></i>
                <span>Menlo Park, CA</span>
              </li>

              <li>
                <i className="fa fa-briefcase"></i>
                <span>Full time</span>
              </li>

              <li>
                <i className="fa fa-money"></i>
                <span>$90,000 - $110,000 / year</span>
              </li>

              <li>
                <i className="fa fa-clock-o"></i>
                <span>40h / week</span>
              </li>

              <li>
                <i className="fa fa-flask"></i>
                <span>2+ years experience</span>
              </li>

              <li>
                <i className="fa fa-certificate"></i>
                <a href="/">Master or Bachelor</a>
              </li>
            </ul>

            <div className="button-group">
              <ul className="social-icons">
                <li className="title">Share on</li>
                <li><a className="facebook" href="/"><i className="fa fa-facebook"></i></a></li>
                <li><a className="google-plus" href="/"><i className="fa fa-google-plus"></i></a></li>
                <li><a className="twitter" href="/"><i className="fa fa-twitter"></i></a></li>
                <li><a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a></li>
              </ul>

              <div className="action-buttons">
                <a className="btn btn-primary" href="/">Apply with linkedin</a>
                <a className="btn btn-success" href="job-apply.html">Apply now</a>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main>
        <JobDetail />
      </main>

      <Footer />
    </div>
  )
}

export default JobDetailPage;
