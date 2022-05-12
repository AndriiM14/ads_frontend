import React from 'react';
import '../../public/sass/index.scss';
import EditUser from '../components/editUser';
import UserItem from '../components/userItem';

function UsersManagement() {
    return (
        <div>
            <div className="row start edit-root">
                <div className="row advs-prev">
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                    <UserItem />
                </div>
                <div className="profile-container admin-edit">
                    <EditUser />
                </div>
            </div>
            <div className="separator" />
        </div>
    );
}

export default UsersManagement;
