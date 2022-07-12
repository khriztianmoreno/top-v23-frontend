import JobItem from '../JobItem'

function RecentJobs() {
  return (
    <section>
      <div className="container">
        <header className="section-header">
          <span>Latest</span>
          <h2>Recent jobs</h2>
        </header>

        <div className="row item-blocks-connected">

          <JobItem />

          <JobItem />

          <JobItem />

          <JobItem />

          <JobItem />


        </div>

        <br/><br/>
        <p className="text-center">
          <a className="btn btn-info" href="job-list.html">Browse all jobs</a>
        </p>
      </div>
    </section>
  )
}

export default RecentJobs;
