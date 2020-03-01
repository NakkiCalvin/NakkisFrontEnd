import axios from 'axios';

const http = axios.create({
  baseURL: 'https://localhost',
  withCredentials: true,
});

export default http;
