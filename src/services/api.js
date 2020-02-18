import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://led-marketing-backend.herokuapp.com'
})

export const apiNoticia = axios.create({
	baseURL: 'http://newsapi.org/v2'
})


