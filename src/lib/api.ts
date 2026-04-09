import ky from 'ky';

export const apiClient = ky.create({
  baseUrl: import.meta.env.VITE_API_URL,
  headers: {
    'x-api-key': import.meta.env.VITE_API_KEY,
  },
});
