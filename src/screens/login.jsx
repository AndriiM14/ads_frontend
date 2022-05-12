import React, { useState, useContext } from 'react';
import '../../public/sass/index.scss';
import { Link, useNavigate } from 'react-router-dom';
import guyImgSrc from '../../public/img/guy_img.svg';
import auth from '../api/auth';
import hashAuthData from './utils/hashToken';
import showError from '../toast';
import TokenContext from '../context/token';

function Login() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const { changeToken } = useContext(TokenContext);

    const createHandler = (field) => ({ target: { value } }) => {
        setData({
            ...data,
            [field]: value,
        });
    };

    const handleLogIn = async () => {
        try {
            await auth(data);

            changeToken(hashAuthData(data));
            navigate('/app');
        } catch (error) {
            showError(error);
        }
    };

    return (
        <div className="row center auth-root">
            <div className="auth-content column left">
                <h1 className="title1">Become a creator</h1>
                <h2 className="title2">Access all features of the platform</h2>
                <img className="auth-img" src={guyImgSrc} alt="presentation" />
            </div>
            <div className="auth-forms column left">
                <h3 className="title3">Log in</h3>
                <input onChange={createHandler('email')} className="text-field" type="email" id="email-inpt" name="email" placeholder="Enter email" />
                <input onChange={createHandler('password')} className="text-field" type="password" id="password-inpt" name="password" placeholder="Password" />
                <button onClick={handleLogIn} id="login-btn" className="primary-button" type="button">Login</button>
                <div className="column center auth-alternate-container">
                    <p className="body">
                        If u don&apos;t have an account.
                        {' '}
                        <Link to="/registration" className="link">Register.</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
