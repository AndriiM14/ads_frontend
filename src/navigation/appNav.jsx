import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../public/sass/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import UsersManagement from '../screens/usersManagement';

function AppNav() {
    return (
        <div className="root">
            <nav className="navigation">
                <div className="row logo">
                    <Link to="/app" className="row item">
                        <i className="fa fa-paperclip icon logo-icon" />
                        <p className="logo-title">Ads-platform</p>
                    </Link>
                </div>
                <div className="nav-input">
                    <input className="text-field nav-search" type="text" id="search" name="search" placeholder="Search" />
                </div>
                <div className="row items">
                    <Link to="/app" className="item"><i className="fa fa-home icon" /></Link>
                    <Link to="/app" className="item"><i className="fa fa-pencil-square-o icon" /></Link>
                    <Link to="/app" className="item"><i className="fa fa-user icon" /></Link>
                    <Link to="/app/users" className="item"><i className="fa fa-users icon" /></Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" />
                <Route path="/users" element={<UsersManagement />} />
            </Routes>
        </div>
    );
}

export default AppNav;
