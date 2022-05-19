import React from 'react';
import PropTypes from 'prop-types';
import Item from './item';
import { AdType } from '../utils/types';
import { deleteAd } from '../api/ads';
import showError from '../toast';

function AdItem({ data, onSelect, onDelete }) {
    const {
        id, title, content, creation_date: date,
    } = data;

    const handleDelete = async () => {
        try {
            await deleteAd(id);
            onDelete(data);
        } catch (error) {
            showError();
        }
    };

    const handleSelect = () => onSelect(data);

    return (
        <Item
            onSelect={handleSelect}
            onDelete={handleDelete}
            data={{ title, content: `${date} ${content.substring(0, 128)}...` }}
        />
    );
}

AdItem.propTypes = {
    data: AdType.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default AdItem;
