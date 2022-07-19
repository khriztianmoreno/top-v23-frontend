const Form = () => (
  <main>
    <section id="sec-custom">
      <div className="container">
        <header className="section-header">
          <span>Custom application</span>
          <h2>Apply now</h2>
          <p>Apply for this job with a custom application.</p>
        </header>

        <form>
          <div className="row">
            <div className="form-group col-xs-12 col-md-6">
              <input
                type="text"
                className="form-control input-lg"
                placeholder="Name"
              />
            </div>

            <div className="form-group col-xs-12 col-md-6">
              <input
                type="email"
                className="form-control input-lg"
                placeholder="Email"
              />
            </div>
          </div>

          <div className="form-group">
            <textarea className="form-control" rows="5" placeholder="Message" />
          </div>

          <div className="form-group" />

          <div className="row">
            <div className="col-xs-6 col-md-3">
              <div className="upload-button upload-button-block">
                <button type="submit" className="btn btn-block btn-success">
                  Attach your CV
                </button>
                <input name="cv" type="file" />
              </div>
            </div>

            <div className="col-xs-6 col-md-3">
              <button type="submit" className="btn btn-block btn-primary">
                Submit application
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  </main>
);

export default Form;
