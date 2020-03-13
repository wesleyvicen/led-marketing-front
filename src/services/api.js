import axios from 'axios';
import { getToken } from './auth';

export const api = axios.create({
  baseURL: 'http://led-marketing-backend.herokuapp.com',
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiNoticia = axios.create({
  baseURL: 'http://newsapi.org/v2',
});
