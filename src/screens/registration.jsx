import React from 'react';
import { Link } from 'react-router-dom';
import guyImgSrc from '../../public/img/guy_img.svg';

function Registration() {
    return (
        <div className="row center auth-root">
            <div className="auth-content column left">
                <h1 className="title1">Become a creator</h1>
                <h2 className="title2">Access all features of the platform</h2>
                <img className="auth-img" src={guyImgSrc} alt="presentation" />
            </div>
            <div className="auth-forms column left">
                <h3 className="title3">Register</h3>
                <form action="./login.html">
                    <input className="text-field" type="email" id="email" name="email" placeholder="Enter email" />
                    <input className="text-field" type="text" id="username" name="username" placeholder="Enter username" />
                    <input className="text-field" type="password" id="password" name="password" placeholder="Password" />
                    <input className="text-field" type="password" id="password" name="password" placeholder="Confirm Password" />
                    <div className="row center auth-role-container">
                        <div>
                            <input className="radio" type="radio" id="creator-button" name="role" value="creator" />
                            <label className="body radio-label" htmlFor="creator-button">Creator</label>
                        </div>
                        <div>
                            <input className="radio" type="radio" id="moderator-button" name="role" value="moderator" />
                            <label className="body radio-label" htmlFor="moderator-button">Moderator</label>
                        </div>
                    </div>
                    <button className="primary-button" type="submit">Register</button>
                    <div className="column center auth-alternate-container">
                        <p className="body">
                            If u don&apos;t have an account.
                            {' '}
                            <Link to="/login" className="link">Login.</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Registration;
