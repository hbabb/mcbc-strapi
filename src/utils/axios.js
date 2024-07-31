import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:1337', // Update with your Strapi URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
