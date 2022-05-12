import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './app/app';

axios.defaults.baseURL = process.env.BASE_URL;

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
