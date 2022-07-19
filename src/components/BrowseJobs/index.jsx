const BrowseJob = () => (
  <header
    className="page-header bg-img"
    style={{ backgroundImage: 'url(/img/bg-banner1.jpg)' }}
  >
    <div className="container page-name">
      <h1 className="text-center">Browse jobs</h1>
      <p className="lead text-center">
        Use following search box to find jobs that fits you better
      </p>
    </div>

    <div className="container">
      <form action="#">
        <div className="row">
          <div className="form-group col-xs-12 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Keyword: job title, skills, or company"
            />
          </div>

          <div className="form-group col-xs-12 col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Location: city, state or zip"
            />
          </div>

          <div className="form-group col-xs-12 col-sm-4">
            <select className="form-control selectpicker">
              <option defaultValue>All categories</option>
              <option>Developer</option>
              <option>Designer</option>
              <option>Customer service</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Sale</option>
              <option>Marketing</option>
              <option>Information technology</option>
              <option>Others</option>
            </select>
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <h6>Contract</h6>
            <div className="checkall-group">
              <div className="checkbox">
                <label htmlFor="contract1">
                  <input
                    type="checkbox"
                    id="contract1"
                    name="contract"
                    defaultChecked
                  />
                  All types
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="contract2">
                  <input type="checkbox" id="contract2" name="contract" />
                  Full-time
                  <small> (354)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="contract3">
                  <input type="checkbox" id="contract3" name="contract" />
                  Part-time
                  <small> (284)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="contract4">
                  <input type="checkbox" id="contract4" name="contract" />
                  Internship
                  <small> (169)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="contract5">
                  <input type="checkbox" id="contract5" name="contract" />
                  Freelance
                  <small> (480)</small>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <h6>Hourly rate</h6>
            <div className="checkall-group">
              <div className="checkbox">
                <label htmlFor="rate1">
                  <input
                    type="checkbox"
                    id="rate1"
                    name="rate"
                    defaultChecked
                  />
                  All rates
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="rate2">
                  <input type="checkbox" id="rate2" name="rate" />
                  $0 - $50
                  <small> (364)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="rate3">
                  <input type="checkbox" id="rate3" name="rate" />
                  $50 - $100
                  <small> (684)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="rate4">
                  <input type="checkbox" id="rate4" name="rate" />
                  $100 - $200
                  <small> (195)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="rate5">
                  <input type="checkbox" id="rate5" name="rate" />
                  $200+
                  <small> (39)</small>
                </label>
              </div>
            </div>
          </div>
          <div className="form-group col-xs-12 col-sm-4">
            <h6>Academic degree</h6>
            <div className="checkall-group">
              <div className="checkbox">
                <label htmlFor="degree1">
                  <input
                    type="checkbox"
                    id="degree1"
                    name="degree"
                    defaultChecked
                  />
                  All degrees
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="degree2">
                  <input type="checkbox" id="degree2" name="degree" />
                  Associate degree
                  <small> (216)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="degree3">
                  <input type="checkbox" id="degree3" name="degree" />
                  Bachelor`s degree
                  <small> (569)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="degree4">
                  <input type="checkbox" id="degree4" name="degree" />
                  Master`s degree
                  <small> (439)</small>
                </label>
              </div>

              <div className="checkbox">
                <label htmlFor="degree5">
                  <input type="checkbox" id="degree5" name="degree" />
                  Doctoral degree
                  <small> (84)</small>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <div className="action-buttons">
            <button type="submit" className="btn btn-primary">
              Apply filter
            </button>
          </div>
        </div>
      </form>
    </div>
  </header>
);

export default BrowseJob;
