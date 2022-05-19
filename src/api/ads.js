import axios from 'axios';
import { DEFAULT_HEADERS, formAuthHeaders } from './config';

export const getAds = (id = null) => {
    const token = localStorage.getItem('token');
    const headers = token === 'null' ? DEFAULT_HEADERS : formAuthHeaders();

    return axios.get(`/advertisement${id ? `/${id}` : ''}`, { headers });
};

export const getUserAds = (userId) => axios.get(`/advertisements/${userId}`, { headers: formAuthHeaders() });

export const postAd = (data) => axios.post('/advertisements', data, { headers: formAuthHeaders() });

export const changeAd = (id, data) => axios.put(`/advertisement/${id}`, data, { headers: formAuthHeaders() });

export const deleteAd = (id) => axios.delete(`/advertisement/${id}`, { headers: formAuthHeaders() });
