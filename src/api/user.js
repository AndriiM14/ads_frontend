import axios from 'axios';
import { DEFAULT_HEADERS, formAuthHeaders } from './config';

export const createUser = (data) => axios.post('/registration', data, { headers: DEFAULT_HEADERS });

export const getBootstrap = () => axios.get('/user', { headers: formAuthHeaders() });

export const getUsers = () => axios.get('/users', { headers: formAuthHeaders() });

export const getUser = (id) => axios.get(`/users/${id}`, { headers: formAuthHeaders() });

export const deleteUser = (id) => axios.delete(`/users/${id}`, { headers: formAuthHeaders() });

export const changeUser = (id, data) => axios.put(`/users/${id}`, data, { headers: formAuthHeaders() });
