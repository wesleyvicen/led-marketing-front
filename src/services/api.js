import axios from 'axios';

const api = axios.create({
	baseURL: 'https://led-marketing-backend.herokuapp.com'
});

export default api;
