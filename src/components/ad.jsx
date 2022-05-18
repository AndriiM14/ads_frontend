import React from 'react';
import PropTypes from 'prop-types';
import '../../public/sass/index.scss';
import { Link } from 'react-router-dom';
import avatarSrc from '../../public/img/avatar.png';
import advrSrc from '../../public/img/advr.jpg';

function Ad({ data }) {
    return (
        <div className="adv-container">
            <div className="row adv-header">
                <img className="adv-avatar" src={avatarSrc} alt="Avatar pic" />
                <h5 className="title5">
                    {data.username}
                </h5>
            </div>
            <img className="adv-img" src={advrSrc} alt="Advertisment" />
            <div className="adv-content">
                <div className="row left adv-location">
                    <i className="fa fa-map-marker location-icon" />
                    <p className="body">
                        {data.location}
                    </p>
                </div>
                <h3 className="title4">
                    {data.title}
                </h3>
                <p className="body">
                    {`${data.content.substring(0, 128)}...`}
                    {'  '}
                    <Link to="/app" className="link">{'Read more>>'}</Link>
                </p>
                <p className="info adv-date">
                    {data.creation_date}
                </p>
            </div>
        </div>
    );
}

Ad.propTypes = {
    data: PropTypes.shape({
        ad_type_id: PropTypes.number.isRequired,
        content: PropTypes.string.isRequired,
        creation_date: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user_id: PropTypes.number,
        username: PropTypes.string,
    }).isRequired,
};

export default Ad;
