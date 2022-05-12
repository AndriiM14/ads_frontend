import React from 'react';
import '../../public/sass/index.scss';
import guyImgSrc from '../../public/img/guy_img.svg';

function Login() {
    return (
        <div className="row center auth-root">
            <div className="auth-content column left">
                <h1 className="title1">Become a creator</h1>
                <h2 className="title2">Access all features of the platform</h2>
                <img className="auth-img" src={guyImgSrc} alt="presentation" />
            </div>
            <div className="auth-forms column left">
                <h3 className="title3">Log in</h3>
                <input className="text-field" type="email" id="email-inpt" name="email" placeholder="Enter email" />
                <input className="text-field" type="password" id="password-inpt" name="password" placeholder="Password" />
                <button id="login-btn" className="primary-button" type="button">Login</button>
                <div className="column center auth-alternate-container">
                    <p className="body">
                        If u don&apos;t have an account.
                        {' '}
                        <a href="./register.html" className="link">Register.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
