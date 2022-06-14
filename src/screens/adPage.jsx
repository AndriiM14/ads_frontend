import React, { useState, useEffect, useContext } from 'react';
import Ripples from 'react-ripples';
import { useParams } from 'react-router-dom';
import '../../public/sass/index.scss';
import advrSrc from '../../public/img/advr.jpg';
import avatarSrc from '../../public/img/avatar.png';
import LoaderWrapper from '../components/loaderWrapper';
import { getAds } from '../api/ads';
import { postDislike, postLike } from '../api/likes';
import showError from '../toast';
import BootrstrapContext from '../context/bootstrap';

function AdPage() {
    const { id } = useParams();

    const [ad, setAd] = useState([]);
    const [loading, setLoading] = useState(false);
    const [rating, setRating] = useState({
        likes: 0, dislikes: 0, liked: false, disliked: false,
    });

    const { bootstrap: { id: currentUser } } = useContext(BootrstrapContext);

    const loadAd = async () => {
        setLoading(true);

        try {
            const res = await getAds(id);
            setAd(res.data[0]);
        } catch (error) {
            showError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadAd(); }, []);

    useEffect(() => {
        setRating({
            likes: ad.likes,
            liked: ad.liked,
            dislikes: ad.dislikes,
            disliked: ad.disliked,
        });
    }, [ad]);

    const handleLike = async () => {
        try {
            await postLike({ user_id: currentUser, ad_id: ad.id });

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
            await postDislike({ user_id: currentUser, ad_id: ad.id });

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

    if (loading) return <LoaderWrapper />;

    return (
        <div>
            <div className="column center">
                <div className="adv-full-container">
                    <img className="adv-img" src={ad.img ? ad.img : advrSrc} alt="Advertisment" />
                    <h3 className="title4">{ad.title}</h3>
                    <div className="row space-between adv-header">
                        <div className="row">
                            <img className="adv-avatar" src={avatarSrc} alt="Avatar" />
                            <div className="column center">
                                <h5 className="title5">{ad.username}</h5>
                                <div className="row left adv-location">
                                    <i className="fa fa-map-marker location-icon" />
                                    <p className="body">{ad.location}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="info adv-date">{ad.creation_date}</p>
                            <div style={{ height: '5px' }} />
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
                    </div>
                    <div className="adv-content">
                        <p className="body">
                            {ad.content}
                        </p>
                    </div>
                </div>
            </div>
            <div className="separator" />
        </div>
    );
}

export default AdPage;
