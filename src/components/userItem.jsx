import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import '../../public/sass/index.scss';
import { deleteUser } from '../api/user';
import showError from '../toast';

function UserItem({
    data,
    onSelect,
    onDelete,
}) {
    const {
        id, firstname, lastname, country, city, address,
    } = data;

    const handleDelete = async () => {
        try {
            await deleteUser(id);
            onDelete();
        } catch (error) {
            showError(error);
        }
    };

    const handleSelect = () => onSelect(data);

    return (
        <Ripples onClick={handleSelect} className="row space-between advs-prev-container">
            <div className="row">
                <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                <div className="advs-prev-content">
                    <h5 className="title5">{`${lastname} ${firstname}`}</h5>
                    <p className="info">{`${country} ${city} ${address}`}</p>
                </div>
            </div>
            <Ripples onClick={handleDelete} className="delete-user">
                <i className="fa fa-trash-o icon" />
            </Ripples>
        </Ripples>
    );
}

UserItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserItem;
