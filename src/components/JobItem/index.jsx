
function JobItem(props) {
  const { job } = props;
  const { title, company, location, type, image, className } = job;
  return (
    <div className="col-xs-12">
      <a className="item-block" href='/'>
        <header>
          <img src={image} alt={company} />
          <div className="hgroup">
            <h4>{title}</h4>
            <h5>{company}</h5>
          </div>
          <div className="header-meta">
            <span className="location">{location}</span>
            <span className={`label ${className}`}>{type}</span>
          </div>
        </header>
      </a>
    </div>
  )
}

export default JobItem;
