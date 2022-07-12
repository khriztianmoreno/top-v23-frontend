function Footer() {
  return (
    <footer className="site-footer">

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">An employment website is a web site that deals specifically with employment or careers. Many employment websites are designed to allow employers to post job requirements for a position to be filled and are commonly known as job boards. Other employment sites offer employer reviews, career and job-search advice, and describe different job descriptions or employers. Through a job website a prospective employee can locate and fill out a job application.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Company</h6>
            <ul className="footer-links">
              <li><a href="page-about.html">About us</a></li>
              <li><a href="page-typography.html">How it works</a></li>
              <li><a href="page-faq.html">Help center</a></li>
              <li><a href="page-typography.html">Privacy policy</a></li>
              <li><a href="page-contact.html">Contact us</a></li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Trendeing jobs</h6>
            <ul className="footer-links">
              <li><a href="job-list.html">Front-end developer</a></li>
              <li><a href="job-list.html">Android developer</a></li>
              <li><a href="job-list.html">iOS developer</a></li>
              <li><a href="job-list.html">Full stack developer</a></li>
              <li><a href="job-list.html">Project administrator</a></li>
            </ul>
          </div>
        </div>

        <hr />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyrights &copy; 2016 All Rights Reserved by <a href="http://themeforest.net/user/shamsoft">ShaMSofT</a>.</p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="/#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="/#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="/#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="/#"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="instagram" href="/#"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer;
