import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from '../app/app';
import Login from '../screens/login';
import Registration from '../screens/registration';
import AppNav from './appNav';

function RootNav() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/app/*" element={<AppNav />} />
            </Routes>
        </HashRouter>
    );
}

export default RootNav;
