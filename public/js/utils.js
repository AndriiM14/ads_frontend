import { HEADERS } from './config.js';

export const hashAuthData = ({ email, password }) => `Basic ${window.btoa(`${email}:${password}`)}`;

export const formAuthHeaders = () => ({
    ...HEADERS,
    Authorization: window.localStorage.getItem('token'),
});
