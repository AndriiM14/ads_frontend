import axios from 'axios';
import { DEFAULT_HEADERS } from './config';

const auth = (data) => axios.post('/auth', data, { headers: DEFAULT_HEADERS });

export default auth;
