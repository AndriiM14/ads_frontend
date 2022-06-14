import axios from 'axios';
import { formAuthHeaders } from './config';

export const postLike = (data) => axios.post('/likes', data, { headers: formAuthHeaders() });

export const postDislike = (data) => axios.post('/dislikes', data, { headers: formAuthHeaders() });
