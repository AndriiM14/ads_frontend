import React, { useContext } from 'react';
import {
    HashRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import TokenContext from '../context/token';
import Login from '../screens/login';
import Registration from '../screens/registration';
import AppNav from './appNav';

function RootNav() {
    const { token } = useContext(TokenContext);

    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={token ? <Navigate to="/app" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="registration" element={<Registration />} />
                <Route path="/app/*" element={<AppNav />} />
            </Routes>
        </HashRouter>
    );
}

export default RootNav;
