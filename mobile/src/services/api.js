import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.192.1.238:3333',
});

export default api;