import { HOST, HEADERS } from './config.js';
import { formAuthHeaders } from './utils.js';

export const auth = (data) => fetch(`${HOST}/auth`, {
  method: "POST",
  headers: HEADERS,
  body: JSON.stringify(data)
});

export const register = (data) => fetch(`${HOST}/registration`, {
  method: "POST",
  headers: HEADERS,
  body: JSON.stringify(data)
});

export const getAds = () => fetch(`${HOST}/advertisement`, {
  method: "GET",
  headers: formAuthHeaders()
});