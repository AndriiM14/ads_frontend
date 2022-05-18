import axios from 'axios';
import { DEFAULT_HEADERS, formAuthHeaders } from './config';

export const getAds = () => {
    const token = localStorage.getItem('token');
    const headers = token === 'null' ? DEFAULT_HEADERS : formAuthHeaders();

    return axios.get('/advertisement', { headers });
};

export const postAdd = (data) => axios.post('/advertisements', data, { headers: formAuthHeaders() });
