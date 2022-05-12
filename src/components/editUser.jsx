import React from 'react';
import '../../public/sass/index.scss';

function EditUser() {
    return (
        <div className="profile-content">
            <input className="text-field" type="email" id="email" name="email" placeholder="Enter email" value="youremail@email.com" />
            <input className="text-field" type="text" id="username" name="username" placeholder="Enter username" value="username" />
            <input className="text-field" type="password" id="password" name="password" placeholder="Change password" />
            <input className="text-field" type="password" id="password" name="password" placeholder="Confirm Password" />
            <div className="row center space-between">
                <button className="secondary-button profile-button" type="submit">Cancel</button>
                <button className="primary-button profile-button" type="submit">Confirm</button>
            </div>
        </div>
    );
}

export default EditUser;
