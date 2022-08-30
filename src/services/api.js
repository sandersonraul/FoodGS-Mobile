import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.112.4.151:8090'
});

export default api;