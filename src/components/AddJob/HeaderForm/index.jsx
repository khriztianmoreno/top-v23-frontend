const HeaderForm = () => (
  <div className="container">
    <div className="row">
      <div className="form-group col-xs-12 col-sm-6">
        <input
          type="text"
          className="form-control input-lg"
          placeholder="Job title, e.g. Front-end developer"
        />
      </div>

      <div className="form-group col-xs-12 col-sm-6">
        <select className="form-control selectpicker">
          <option>Select a company</option>
          <option>Google</option>
          <option>Microsoft</option>
          <option>Apple</option>
          <option>Facebook</option>
        </select>
        <a className="help-block" href="company-add.html">
          Add new company
        </a>
      </div>

      <div className="form-group col-xs-12">
        <textarea
          className="form-control"
          rows="3"
          placeholder="Short description"
        />
      </div>

      <div className="form-group col-xs-12">
        <input
          type="text"
          className="form-control"
          placeholder="Application URL"
        />
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-map-marker" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Location, e.g. Melon Park, CA"
          />
        </div>
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-briefcase" />
          </span>
          <select className="form-control selectpicker">
            <option>Full time</option>
            <option>Part time</option>
            <option>Internship</option>
            <option>Freelance</option>
            <option>Remote</option>
          </select>
        </div>
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-money" />
          </span>
          <input type="text" className="form-control" placeholder="Salary" />
        </div>
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-clock-o" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Working hours, e.g. 40"
          />
          <span className="input-group-addon">hours / week</span>
        </div>
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-flask" />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Experience, e.g. 5"
          />
          <span className="input-group-addon">Years</span>
        </div>
      </div>

      <div className="form-group col-xs-12 col-sm-6 col-md-4">
        <div className="input-group input-group-sm">
          <span className="input-group-addon">
            <i className="fa fa-certificate" />
          </span>
          <select className="form-control selectpicker">
            <option>Postdoc</option>
            <option>Ph.D.</option>
            <option>Master</option>
            <option selected>Bachelor</option>
          </select>
        </div>
      </div>
    </div>

    <div className="button-group">
      <div className="action-buttons">
        <div className="upload-button">
          <button type="button" className="btn btn-block btn-primary">
            Choose a cover image
          </button>
          <input id="cover_img_file" type="file" />
        </div>
      </div>
    </div>
  </div>
);

export default HeaderForm;
