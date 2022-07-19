import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Sign/Login';
import Register from './pages/Sign/Register';
import Candidates from './pages/Candidates';
import AddJob from './pages/Jobs/Create';
import ApplyJob from './pages/Jobs/Apply';
import DetailJob from './pages/Jobs/Detail';
import BrowseJobs from './pages/Jobs';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/jobs" element={<BrowseJobs />} />
    <Route path="/jobs/create" element={<AddJob />} />
    <Route path="/jobs/detail/:id" element={<DetailJob />} />
    <Route path="/jobs/apply/:id" element={<ApplyJob />} />
    <Route path="/candidates" element={<Candidates />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
  </Routes>
);

export default App;
