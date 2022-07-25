const BASE_URL = 'http://localhost:8080/api';

export async function getJobs() {
  const response = await fetch(`${BASE_URL}/jobs`);
  return await response.json();
}

export async function getJob(id) {
  const response = await fetch(`${BASE_URL}/jobs/${id}`);
  return await response.json();
}

export async function createJob(job) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(job),
  }
  const response = await fetch(`${BASE_URL}/jobs`, options);
  return await response.json();
}


