import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../sass/index.scss';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const AppNav = () => (
  <div className='root'>
    <nav className="navigation">
      <div className="row logo">
        <a className="row item">
          <i className="fa fa-paperclip icon logo-icon"></i>
          <p className="logo-title">Ads-platform</p>
        </a>
      </div>
      <div className="nav-input">
        <input className="text-field nav-search" type="text" id="search" name="search" placeholder="Search" />
      </div>
      <div className="row items">
        <a href="./index.html" className="item"><i className="fa fa-home icon"></i></a>
        <a href="./create.html" className="item"><i className="fa fa-pencil-square-o icon"></i></a>
        <a href="./profile.html" className="item"><i className="fa fa-user icon"></i></a>
      </div>
    </nav>
    <Routes>
      <Route path='/app/users' />
    </Routes>
  </div>
);

export default AppNav;
