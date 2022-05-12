import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../public/sass/index.scss';
import showError from '../toast';
import { changeUser } from '../api/user';

function EditUser({ data, onConfirm, onCancel }) {
    const [editData, setEditData] = useState({});

    useEffect(() => {
        setEditData({ ...data });
    }, [data]);

    const createHandler = (field) => ({ target: { value } }) => {
        setEditData({
            ...editData,
            [field]: value,
        });
    };

    const handleConfirm = async () => {
        const payload = {};

        if (editData.password) {
            if (editData.password !== editData.confirm_password) {
                showError({ message: 'Passwords are not equal!' });
                return;
            }

            payload.password = editData.password;
        }

        payload.email = editData.email;
        payload.phone_number = editData.phone_number;
        payload.firstname = editData.firstname;
        payload.lastname = editData.lastname;
        payload.country = editData.country;
        payload.city = editData.city;
        payload.district = editData.district;
        payload.address = editData.address;

        try {
            await changeUser(data.id, payload);
            onConfirm();
        } catch (error) {
            showError(error);
        }
    };

    const handleCancel = () => onCancel();

    return (
        <div className="profile-content">
            <input onChange={createHandler('email')} value={editData.email} className="text-field" type="email" id="email" name="email" placeholder="Enter email" />
            <input onChange={createHandler('phone_number')} value={editData.phone_number} className="text-field" type="number" id="phone" name="phone" placeholder="Enter phone number" />
            <input onChange={createHandler('firstname')} value={editData.firstname} className="text-field" type="text" id="firstname" name="firstname" placeholder="Enter firstname" />
            <input onChange={createHandler('lastname')} value={editData.lastname} className="text-field" type="text" id="lastname" name="lastname" placeholder="Enter lastname" />
            <input onChange={createHandler('country')} value={editData.country} className="text-field" type="text" id="country" name="country" placeholder="Enter country" />
            <input onChange={createHandler('city')} value={editData.city} className="text-field" type="text" id="city" name="city" placeholder="Enter city" />
            <input onChange={createHandler('district')} value={editData.district} className="text-field" type="text" id="district" name="district" placeholder="Enter district" />
            <input onChange={createHandler('address')} value={editData.address} className="text-field" type="text" id="address" name="address" placeholder="Enter address" />
            <input onChange={createHandler('password')} className="text-field" type="password" id="password" name="password" placeholder="Password" />
            <input onChange={createHandler('confirm_password')} className="text-field" type="password" id="confirnm-password" name="confirm-password" placeholder="Confirm Password" />
            <div className="row center space-between">
                <button onClick={handleCancel} className="secondary-button profile-button" type="submit">Cancel</button>
                <button onClick={handleConfirm} className="primary-button profile-button" type="submit">Confirm</button>
            </div>
        </div>
    );
}

EditUser.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        email: PropTypes.string.isRequired,
        phone_number: PropTypes.string.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        district: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
    onConfirm: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired,
};

export default EditUser;
