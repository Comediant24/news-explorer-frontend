import { NEWS_API_CONFIG } from './utils';

const { URL, KEY, PAGE_SIZE } = NEWS_API_CONFIG;

const nowDate = new Date();
const pastDate = new Date();
pastDate.setDate(pastDate.getDate() - 7);

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject({ error: response.status, message: response.message });
};

export const getNews = (keyword) => {
  return fetch(
    `${URL}?q=${keyword}&from=${pastDate.toISOString()}&to=${nowDate.toISOString()}&pageSize=${PAGE_SIZE}&apiKey=${KEY}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  ).then((res) => handleResponse(res));
};
