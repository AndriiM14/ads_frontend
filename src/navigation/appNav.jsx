import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../public/sass/index.scss';
import 'font-awesome/css/font-awesome.min.css';

function AppNav() {
    return (
        <div className="root">
            <nav className="navigation">
                <div className="row logo">
                    <a className="row item">
                        <i className="fa fa-paperclip icon logo-icon" />
                        <p className="logo-title">Ads-platform</p>
                    </a>
                </div>
                <div className="nav-input">
                    <input className="text-field nav-search" type="text" id="search" name="search" placeholder="Search" />
                </div>
                <div className="row items">
                    <a href="./index.html" className="item"><i className="fa fa-home icon" /></a>
                    <a href="./create.html" className="item"><i className="fa fa-pencil-square-o icon" /></a>
                    <a href="./profile.html" className="item"><i className="fa fa-user icon" /></a>
                </div>
            </nav>
            <Routes>
                <Route path="/app/users" />
            </Routes>
        </div>
    );
}

export default AppNav;
