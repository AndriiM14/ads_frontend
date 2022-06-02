import React from 'react';
import PropTypes from 'prop-types';
import '../../public/sass/index.scss';
import { deleteUser } from '../api/user';
import showError from '../toast';
import { UserType } from '../utils/types';
import Item from './item';

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
        <Item
            onSelect={handleSelect}
            onDelete={handleDelete}
            data={{ title: `${lastname} ${firstname}`, content: `${country} ${city} ${address}` }}
        />
    );
}

UserItem.propTypes = {
    data: UserType.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserItem;
