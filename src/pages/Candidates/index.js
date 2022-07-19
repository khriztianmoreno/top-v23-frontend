import React from 'react';

import Navigation from '../../components/Navigation';
import ApplicantsFor from '../../components/ApplicantsFor';
import Candidate from '../../components/Candidate';
import Footer from '../../components/Footer';

import profiles from '../../assets/data/candidates.json';

const Candidates = () => (
  <div className="nav-on-header smart-nav bg-alt">
    <Navigation />

    <ApplicantsFor />

    <main>
      <section className="no-padding-top">
        <div className="container">
          <div className="row">
            {profiles.map((profile) => (
              <Candidate key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default Candidates;
