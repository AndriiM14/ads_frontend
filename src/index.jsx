import React from 'react';
import ReactDOM from 'react-dom/client';
import RootNav from './navigation/root';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RootNav />);
