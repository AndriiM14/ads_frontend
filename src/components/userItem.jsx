import React from 'react';
import '../../public/sass/index.scss';

function UserItem() {
    return (
        <div className="row space-between advs-prev-container">
            <div className="row">
                <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                <div className="advs-prev-content">
                    <h5 className="title5">username</h5>
                    <p className="info">20.04.2022 12:00</p>
                </div>
            </div>
            <a href="#" className="delete-user">
                <i className="fa fa-trash-o icon" />
            </a>
        </div>
    );
}

export default UserItem;
