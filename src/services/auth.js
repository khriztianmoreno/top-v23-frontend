const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

export async function login(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/auth/local/login`, options);
  return response.json();
}

export async function signup(auth) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(auth),
  };
  const response = await fetch(`${BASE_URL}/auth/local/signup`, options);
  return response.json();
}

export async function verify(token) {
  const response = await fetch(`${BASE_URL}/auth/local/verify-account/${token}`);
  return response.json();
}
