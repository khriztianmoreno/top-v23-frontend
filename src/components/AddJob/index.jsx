import React from 'react';

import Header from '../Header';
import HeaderForm from './HeaderForm';

const AddJobForm = () => (
  <div>
    <Header className="page-header">
      <div>
        <div className="container page-name">
          <h1 className="text-center">Add a new job</h1>
          <p className="lead text-center">
            Create a new vacancy for your company and put it online.
          </p>
        </div>

        <HeaderForm />
      </div>
    </Header>

    <main>
      <section>
        <div className="container">
          <header className="section-header">
            <span>Description</span>
            <h2>Job detail</h2>
            <p>
              Write about your company, job description, skills required,
              benefits, etc.
            </p>
          </header>
          <textarea className="form-control" />
        </div>
      </section>

      <section className="bg-alt">
        <div className="container">
          <header className="section-header">
            <span>Are you done?</span>
            <h2>Submit Job</h2>
            <p>
              Please review your information once more and press the below
              button to put your job online.
            </p>
          </header>
          <p className="text-center">
            <button type="button" className="btn btn-success btn-xl btn-round">
              Submit your job
            </button>
          </p>
        </div>
      </section>
    </main>
  </div>
);

export default AddJobForm;
