const BASE_URL = process.env.REACT_APP_API_URL 
  || 'http://localhost:8080/api';

const getHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`
});

export const businessAPI = {
  getAll: () => fetch(`${BASE_URL}/business`, 
    { headers: getHeaders() }).then(r => r.json()),

  getById: (id) => fetch(`${BASE_URL}/business/${id}`, 
    { headers: getHeaders() }).then(r => r.json()),

  update: (id, data) => fetch(`${BASE_URL}/business/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data)
  }).then(r => r.json())
};

export const authAPI = {
  login: (data) => fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json()),

  register: (data) => fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(r => r.json())
};