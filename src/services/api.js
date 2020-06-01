import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rootfy.ml/',
    // baseURL: 'http://localhost:3333/',
});

export default api;