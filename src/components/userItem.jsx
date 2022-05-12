import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import '../../public/sass/index.scss';

function UserItem({
    data: {
        firstname, lastname, country, city, address,
    },
}) {
    return (
        <div className="row space-between advs-prev-container">
            <div className="row">
                <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                <div className="advs-prev-content">
                    <h5 className="title5">{`${lastname} ${firstname}`}</h5>
                    <p className="info">{`${country} ${city} ${address}`}</p>
                </div>
            </div>
            <Ripples className="delete-user">
                <i className="fa fa-trash-o icon" />
            </Ripples>
        </div>
    );
}

UserItem.propTypes = {
    data: PropTypes.objectOf({
        firstname: PropTypes.string.isRequired,
        lastname: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserItem;
