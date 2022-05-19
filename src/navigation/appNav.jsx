import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../../public/sass/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import UsersManagement from '../screens/usersManagement';
import BootrstrapContext from '../context/bootstrap';
import showError from '../toast';
import Profile from '../screens/profile';
import Home from '../screens/home';
import AdPage from '../screens/adPage';
import EditAd from '../screens/editAd';
import { getBootstrap } from '../api/user';

function AppNav() {
    const [bootstrap, setBootstrap] = useState({});

    const loadBootstrap = async () => {
        try {
            const res = await getBootstrap();
            setBootstrap(res.data);
        } catch (error) {
            showError(error);
        }
    };

    useEffect(() => {
        loadBootstrap();
    }, []);

    return (
        <BootrstrapContext.Provider value={{ bootstrap, setBootstrap, loadBootstrap }}>
            <div className="root">
                <nav className="navigation">
                    <div className="row logo">
                        <Link to="/app" className="row item">
                            <i className="fa fa-paperclip icon logo-icon" />
                            <p className="logo-title">Ads-platform</p>
                        </Link>
                    </div>
                    <div className="nav-input" />
                    <div className="row items">
                        <Link to="/app" className="item"><i className="fa fa-home icon" /></Link>
                        <Link to="/app/edit-ad" className="item"><i className="fa fa-pencil-square-o icon" /></Link>
                        <Link to="/app/profile" className="item"><i className="fa fa-user icon" /></Link>
                        {bootstrap.type === 'Moderator' && <Link to="/app/users" className="item"><i className="fa fa-users icon" /></Link>}
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edit-ad" element={<EditAd />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/users" element={<UsersManagement />} />
                    <Route path="/ad-page">
                        <Route path=":id" element={<AdPage />} />
                    </Route>
                </Routes>
            </div>
        </BootrstrapContext.Provider>
    );
}

export default AppNav;
