import axios from 'axios';

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const access = sessionStorage.getItem('token');
  if (config.url === '/api/login') {
    return config;
  }
  if (config.url === '/api/reissue') {
    return config;
  }
  if (access) {
    config.headers['Authorization'] = `Token ${access}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const statusCode = error.response?.status;
    if (error.config.url === '/api/reissue' && statusCode === 400) {
      return Promise.reject(error);
    }
    if (statusCode === 404) {
      console.log(404);
    }
    return Promise.reject(error);
  },
);
