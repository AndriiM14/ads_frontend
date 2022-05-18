import React, { useState, useEffect } from 'react';
import '../../public/sass/index.scss';
import { getAds } from '../api/ads';
import Ad from '../components/ad';
import LoaderWrapper from '../components/loaderWrapper';
import showError from '../toast';

function Home() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadAds = async () => {
        setLoading(true);

        try {
            const res = await getAds();
            setAds(res.data);
        } catch (error) {
            showError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { loadAds(); }, []);

    const renderAds = () => ads.map((data) => <Ad key={data.id} data={data} />);

    return (
        <div>
            <div className="advs">
                {loading ? <LoaderWrapper /> : renderAds()}
            </div>
            <div className="separator" />
        </div>
    );
}

export default Home;
