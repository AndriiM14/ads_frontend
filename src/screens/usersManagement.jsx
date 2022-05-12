import React, { useState, useEffect } from 'react';
import '../../public/sass/index.scss';
import { getUsers } from '../api/user';
import EditUser from '../components/editUser';
import UserItem from '../components/userItem';
import showError from '../toast';

function UsersManagement() {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    const loadUsers = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (error) {
            showError(error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);

    const handleSelect = (user) => setSelectedUser(user);

    const handleUserChanged = () => {
        loadUsers();
    };

    const handleCancelChange = () => {
        setSelectedUser(null);
    };

    const renderUserItem = (item) => (
        <UserItem key={item.id} data={item} onSelect={handleSelect} onDelete={loadUsers} />
    );

    return (
        <div>
            <div className="row start edit-root">
                <div className="row advs-prev">
                    {users.map(renderUserItem)}
                </div>
                <div className="profile-container admin-edit">
                    {selectedUser && (
                        <EditUser
                            data={selectedUser}
                            onConfirm={handleUserChanged}
                            onCancel={handleCancelChange}
                        />
                    )}
                </div>
            </div>
            <div className="separator" />
        </div>
    );
}

export default UsersManagement;
