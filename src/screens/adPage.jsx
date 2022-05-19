import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../../public/sass/index.scss';
import advrSrc from '../../public/img/advr.jpg';
import avatarSrc from '../../public/img/avatar.png';
import LoaderWrapper from '../components/loaderWrapper';
import { getAds } from '../api/ads';
import showError from '../toast';

function AdPage() {
    const { id } = useParams();

    const [ad, setAd] = useState([]);
    const [loading, setLoading] = useState(false);

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
                        <p className="info adv-date">{ad.creation_date}</p>
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
