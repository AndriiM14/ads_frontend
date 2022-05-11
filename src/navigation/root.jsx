import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../app/App';
import AppNav from './appNav';

const RootNav = () => (
    <HashRouter>
        <Routes>
            <Route path='/' element={<App />}  />
            <Route path='/app/*' element={<AppNav />} />
        </Routes>
    </HashRouter>
);

export default RootNav;
