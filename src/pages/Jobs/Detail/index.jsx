import Navigation from '../../../components/Navigation';
import Header from '../../../components/Header';
import JobDetail from '../../../components/JobDetail';
import Description from '../../../components/JobDetail/Description';
import Footer from '../../../components/Footer';

const DetailJob = () => (
  <div className="nav-on-header smart-nav bg-alt">
    <Navigation />

    <Header
      className="page-header bg-img size-lg"
      backgroundImage="url(/img/bg-banner2.jpg)"
    >
      <Description />
    </Header>

    <main>
      <JobDetail />
    </main>

    <Footer />
  </div>
);

export default DetailJob;
