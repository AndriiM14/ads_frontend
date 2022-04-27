import { HOST, HEADERS } from 'config.js';
import { formAuthHeaders } from 'utils.js';

const auth = (data) => fetch(`${HOST}/auth`, {
  method: "POST",
  headers: HEADERS,
  data: data
});

const register = (data) => fetch(`${HOST}/registration`, {
  method: "POST",
  headers: HEADERS,
  data: data
});

const getAds = () => fetch(`${HOST}/advertisement`, {
  method: "GET",
  headers: formAuthHeaders()
});