import useForm from '../../../hooks/useForm';
import { createApplicant } from '../../../services/candidates';

const Form = () => {
  const [form, handleChange] = useForm({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createApplicant(form);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section id="sec-custom">
        <div className="container">
          <header className="section-header">
            <span>Custom application</span>
            <h2>Apply now</h2>
            <p>Apply for this job with a custom application.</p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="text"
                  className="form-control input-lg"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group col-xs-12 col-md-6">
                <input
                  type="email"
                  className="form-control input-lg"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                className="form-control"
                rows="5"
                placeholder="Message"
                name="message"
                onChange={handleChange}
              />
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
};

export default Form;
