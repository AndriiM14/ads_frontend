import React from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import '../../public/sass/index.scss';

function Item({
    data: { title, content },
    onSelect,
    onDelete,
}) {
    return (
        <Ripples onClick={onSelect} className="row space-between advs-prev-container">
            <div className="row">
                <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                <div className="advs-prev-content">
                    <h5 className="title5">{title}</h5>
                    <p className="info">{content}</p>
                </div>
            </div>
            <Ripples onClick={onDelete} className="delete-user">
                <i className="fa fa-trash-o icon" />
            </Ripples>
        </Ripples>
    );
}

Item.propTypes = {
    data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Item;
