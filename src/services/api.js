import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const businessAPI = {
  getAll: () => api.get('/business'),
  getById: (id) => api.get(`/business/${id}`),
  create: (data) => api.post('/business', data),
  update: (id, data) => api.put(`/business/${id}`, data)
};

export const chatAPI = {
  getHistory: (businessId) => api.get(`/chat/history/${businessId}`)
};

export default api;