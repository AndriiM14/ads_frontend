import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Ripples from 'react-ripples';
import '../../public/sass/index.scss';
import { Link } from 'react-router-dom';
import avatarSrc from '../../public/img/avatar.png';
import advrSrc from '../../public/img/advr.jpg';
import { AdType } from '../utils/types';
import { postDislike, postLike } from '../api/likes';
import showError from '../toast';

function Ad({ data, currentUser }) {
    const [rating, setRating] = useState({
        likes: 0, dislikes: 0, liked: false, disliked: false,
    });

    useEffect(() => {
        setRating({
            likes: data.likes,
            liked: data.liked,
            dislikes: data.dislikes,
            disliked: data.disliked,
        });
    }, [data]);

    const handleLike = async () => {
        try {
            await postLike({ user_id: currentUser, ad_id: data.id });

            if (rating.liked) {
                setRating((prevRating) => ({
                    ...prevRating,
                    likes: prevRating.likes - 1,
                    liked: false,
                }));
            } else if (rating.disliked) {
                setRating((prevRating) => ({
                    disliked: false,
                    dislikes: prevRating.dislikes - 1,
                    likes: prevRating.likes + 1,
                    liked: true,
                }));
            } else {
                setRating((prevRating) => ({
                    ...prevRating,
                    likes: prevRating.likes + 1,
                    liked: true,
                }));
            }
        } catch (error) {
            showError(error);
        }
    };

    const handleDislike = async () => {
        try {
            await postDislike({ user_id: currentUser, ad_id: data.id });

            if (rating.disliked) {
                setRating((prevRating) => ({
                    ...prevRating,
                    dislikes: prevRating.dislikes - 1,
                    disliked: false,
                }));
            } else if (rating.liked) {
                setRating((prevRating) => ({
                    liked: false,
                    likes: prevRating.likes - 1,
                    dislikes: prevRating.dislikes + 1,
                    disliked: true,
                }));
            } else {
                setRating((prevRating) => ({
                    ...prevRating,
                    dislikes: prevRating.dislikes + 1,
                    disliked: true,
                }));
            }
        } catch (error) {
            showError(error);
        }
    };

    return (
        <div className="adv-container">
            <div className="row adv-header">
                <img className="adv-avatar" src={avatarSrc} alt="Avatar pic" />
                <h5 className="title5">
                    {data.username}
                </h5>
            </div>
            <img className="adv-img" src={data.img ? data.img : advrSrc} alt="Advertisment" />
            <div className="adv-content">
                <div className="row space-between">
                    <div className="row left adv-location">
                        <i className="fa fa-map-marker location-icon" />
                        <p className="body">
                            {data.location}
                        </p>
                    </div>
                    {currentUser && (
                        <div className="row">
                            <div className="row">
                                <Ripples onClick={handleLike} className="item log-out">
                                    <i className={`fa ${rating.liked ? 'fa-thumbs-up' : 'fa-thumbs-o-up'} icon`} />
                                </Ripples>
                                <div style={{ width: '5px' }} />
                                <p className="body">{rating.likes}</p>
                            </div>
                            <div style={{ width: '25px' }} />
                            <div className="row">
                                <Ripples onClick={handleDislike} className="item log-out">
                                    <i className={`fa ${rating.disliked ? 'fa-thumbs-down' : 'fa-thumbs-o-down'} icon`} />
                                </Ripples>
                                <div style={{ width: '5px' }} />
                                <p className="body">{rating.dislikes}</p>
                            </div>
                        </div>
                    )}
                </div>
                <h3 className="title4">
                    {data.title}
                </h3>
                <p className="body">
                    {`${data.content.substring(0, 128)}...`}
                    {'  '}
                    <Link to={`/app/ad-page/${data.id}`} className="link">{'Read more>>'}</Link>
                </p>
                <p className="info adv-date">
                    {data.creation_date}
                </p>
            </div>
        </div>
    );
}

Ad.propTypes = {
    currentUser: PropTypes.number.isRequired,
    data: AdType.isRequired,
};

export default Ad;
