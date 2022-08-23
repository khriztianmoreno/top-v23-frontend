const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}/api`;
/* eslint-disable */
export async function getJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  throw new Error('holi');
  // return response.json();
}

export async function getJob(id) {
  const response = await fetch(`${BASE_URL}/jobs/${id}`);
  return response.json();
}

export async function createJob(job) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  };
  const response = await fetch(`${BASE_URL}/jobs`, options);
  return response.json();
}
