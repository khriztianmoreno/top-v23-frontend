const Pagination = () => (
  <nav className="text-center">
    <ul className="pagination">
      <li>
        <a href="/" aria-label="Previous">
          <i className="fas fa-angle-left" />
        </a>
      </li>
      <li>
        <a href="/">1</a>
      </li>
      <li className="active">
        <a href="/">2</a>
      </li>
      <li>
        <a href="/">3</a>
      </li>
      <li>
        <a href="/">4</a>
      </li>
      <li>
        <a href="/" aria-label="Next">
          <i className="fas fa-angle-right" />
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;
