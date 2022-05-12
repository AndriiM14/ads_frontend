import axios from 'axios';
import { DEFAULT_HEADERS } from './config';

export const createUser = (data) => axios.post('/registration', data, { headers: DEFAULT_HEADERS });
