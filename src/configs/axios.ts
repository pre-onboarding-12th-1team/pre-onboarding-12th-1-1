import axios from 'axios';
import { getToken } from 'utils/localStorage';

export const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop',
  timeout: 4000,
});

instance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    console.error(error);
  },
);
