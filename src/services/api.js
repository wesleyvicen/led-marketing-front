import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const apiNoticia = axios.create({
  baseURL: 'http://newsapi.org/v2',
});
