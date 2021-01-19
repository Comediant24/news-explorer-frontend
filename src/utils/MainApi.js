import { MAIN_API_CONFIG } from './utils';

const { URL } = MAIN_API_CONFIG;

const handleResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject({ error: response.status, message: response.message });
};

export const register = (email, password, name) => {
  console.log('email, password, name', email, password, name);
  return fetch(`http://localhost:3000/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  }).then((res) => handleResponse(res));
};

export const authorize = (email, password) => {
  return fetch(`${URL}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, email }),
  }).then((res) => handleResponse(res));
};

export const getUserData = (token) => {
  return fetch(`${URL}/users/me`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

export const getSaveNews = (token) => {
  return fetch(`${URL}/articles`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

export const addNewsCard = (newsArticle, token) => {
  return fetch(`${URL}/cards`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: newsArticle.keyword,
      title: newsArticle.title,
      text: newsArticle.text,
      date: newsArticle.date,
      source: newsArticle.source,
      link: newsArticle.link,
      image: newsArticle.image,
    }),
  }).then((res) => handleResponse(res));
};

export const removeCard = (id, token) => {
  return fetch(`${URL}/cards/${id}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};
