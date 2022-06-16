import React from 'react';
import '../../public/sass/index.scss';
import { Link } from 'react-router-dom';
import avatarSrc from '../../public/img/avatar.png';
import advrSrc from '../../public/img/advr.jpg';
import { AdType } from '../utils/types';

function Ad({ data }) {
    return (
        <div className="adv-container">
            <div className="row adv-header">
                <img className="adv-avatar" src={avatarSrc} alt="Avatar pic" />
                <h5 data-testid="username" className="title5">
                    {data.username}
                </h5>
            </div>
            <img className="adv-img" src={data.img ? data.img : advrSrc} alt="Advertisment" />
            <div className="adv-content">
                <div className="row left adv-location">
                    <i className="fa fa-map-marker location-icon" />
                    <p data-testid="location" className="body">
                        {data.location}
                    </p>
                </div>
                <h3 data-testid="title" className="title4">
                    {data.title}
                </h3>
                <p className="body">
                    {`${data.content.substring(0, 128)}...`}
                    {'  '}
                    <Link to={`/app/ad-page/${data.id}`} className="link">{'Read more>>'}</Link>
                </p>
                <p data-testid="creation_date" className="info adv-date">
                    {data.creation_date}
                </p>
            </div>
        </div>
    );
}

Ad.propTypes = {
    data: AdType.isRequired,
};

export default Ad;
