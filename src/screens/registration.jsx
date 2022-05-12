import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import guyImgSrc from '../../public/img/guy_img.svg';
import { createUser } from '../api/user';
import showError from '../toast';

function Registration() {
    const [data, setData] = useState({});
    const navigate = useNavigate();

    const createHandler = (field) => ({ target: { value } }) => {
        setData({
            ...data,
            [field]: value,
        });
    };

    const handleRegistration = async () => {
        if (data.password !== data.confirm_password) {
            showError({ message: 'Passwords are not equal!' });
            return;
        }

        try {
            const cpyData = { ...data };
            delete cpyData.confirm_password;

            await createUser(cpyData);
            navigate('/login');
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
                <h3 className="title3">Register</h3>
                <form action="./login.html">
                    <input onChange={createHandler('email')} className="text-field" type="email" id="email" name="email" placeholder="Enter email" />
                    <input onChange={createHandler('phone_number')} className="text-field" type="number" id="phone" name="phone" placeholder="Enter phone number" />
                    <input onChange={createHandler('firstname')} className="text-field" type="text" id="firstname" name="firstname" placeholder="Enter firstname" />
                    <input onChange={createHandler('lastname')} className="text-field" type="text" id="lastname" name="lastname" placeholder="Enter lastname" />
                    <input onChange={createHandler('country')} className="text-field" type="text" id="country" name="country" placeholder="Enter country" />
                    <input onChange={createHandler('city')} className="text-field" type="text" id="city" name="city" placeholder="Enter city" />
                    <input onChange={createHandler('district')} className="text-field" type="text" id="district" name="district" placeholder="Enter district" />
                    <input onChange={createHandler('address')} className="text-field" type="text" id="address" name="address" placeholder="Enter address" />
                    <input onChange={createHandler('password')} className="text-field" type="password" id="password" name="password" placeholder="Password" />
                    <input onChange={createHandler('confirm_password')} className="text-field" type="password" id="confirnm-password" name="confirm-password" placeholder="Confirm Password" />
                    <div className="row center auth-role-container">
                        <div>
                            <label className="body radio-label" htmlFor="creator-button">
                                <input onChange={createHandler('type')} className="radio" type="radio" id="creator-button" name="role" value="User" />
                                {'      '}
                                Creator
                            </label>
                        </div>
                        <div>
                            <label className="body radio-label" htmlFor="moderator-button">
                                <input onChange={createHandler('type')} className="radio" type="radio" id="moderator-button" name="role" value="Moderator" />
                                {'      '}
                                Moderator
                            </label>
                        </div>
                    </div>
                    <button onClick={handleRegistration} className="primary-button" type="button">Register</button>
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
