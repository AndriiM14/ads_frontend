import React, { useState, useEffect, useContext } from 'react';
import '../../public/sass/index.scss';
import { getAds } from '../api/ads';
import Ad from '../components/ad';
import LoaderWrapper from '../components/loaderWrapper';
import BootrstrapContext from '../context/bootstrap';
import showError from '../toast';

function Home() {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(false);

    const { bootstrap: { id } } = useContext(BootrstrapContext);

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

    const renderAds = () => ads.map((data) => <Ad key={data.id} data={data} currentUser={id} />);

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
