import dataJobs from '../assets/data/jobs.json';

export function getJobs() {
  return dataJobs;
}

export function getJob(id) {
  return dataJobs.find(job => job.id === id);
}
