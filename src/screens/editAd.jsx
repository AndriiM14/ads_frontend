import React, {
    useState, useEffect, useContext, useRef,
} from 'react';
import Ripples from 'react-ripples';
import { ref } from 'firebase/storage';
import { v4 } from 'uuid';
import { changeAd, getUserAds, postAd } from '../api/ads';
import loadImage from '../api/images';
import AdItem from '../components/adItem';
import LoaderWrapper from '../components/loaderWrapper';
import BootrstrapContext from '../context/bootstrap';
import showError from '../toast';
import { storage } from '../utils/firebase';
import '../../public/sass/index.scss';

const DEFAULT_FORM_DATA = { title: '', content: '', ad_type_id: '1' };

function EditAd() {
    const imgInput = useRef(null);

    const { bootstrap } = useContext(BootrstrapContext);

    const [loading, setLoading] = useState(false);
    const [ads, setAds] = useState([]);
    const [selectedAd, setSelectedAd] = useState(null);

    const [formLoading, setFormLoading] = useState(false);
    const [formData, setFormData] = useState(DEFAULT_FORM_DATA);

    const [imgLoading, setImgLoading] = useState(false);
    const [img, setImg] = useState(null);

    const loadAds = async () => {
        setLoading(true);
        try {
            const res = await getUserAds(bootstrap.id);
            setAds(res.data);
        } catch (error) {
            showError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (Object.keys(bootstrap).length > 0) { loadAds(); }
    }, [bootstrap]);

    const handleSelect = (data) => {
        setSelectedAd(data);
        setFormData({
            title: data.title,
            content: data.content,
            ad_type_id: data.ad_type_id.toString(),
        });
        setImg(data.img);
    };

    const renderAds = () => ads.map((data) => (
        <AdItem
            key={data.id}
            data={data}
            onSelect={handleSelect}
            onDelete={loadAds}
        />
    ));

    const createHandler = (field) => ({ target: { value } }) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleLoadImg = async ({ target: { files: [loadedImg] } }) => {
        setImgLoading(true);
        try {
            const url = await loadImage(ref(storage, `ads_img/${loadedImg.name} + ${v4()}`), loadedImg);
            setImg(url);
        } finally {
            setImgLoading(false);
        }
    };

    const handleClipperClick = () => imgInput.current.click();

    const handleCancel = () => {
        setFormData(DEFAULT_FORM_DATA);
        setSelectedAd(null);
        setImg(null);
    };

    const handlePost = async () => {
        setFormLoading(true);
        try {
            const paylaod = {
                ...formData,
                ad_type_id: parseInt(formData.ad_type_id, 10),
                img,
                user_id: bootstrap.id,
            };

            if (selectedAd) await changeAd(selectedAd.id, paylaod);
            else await postAd(paylaod);

            handleCancel();
        } catch (error) {
            showError(error);
        } finally {
            setFormLoading(false);
        }

        loadAds();
    };

    return (
        <div>
            <div className="row start edit-root">
                <div className="advs-prev">
                    {loading ? <LoaderWrapper /> : renderAds()}
                </div>
                <div className="edit-container">
                    <div className="row space-between">
                        <textarea
                            onChange={createHandler('title')}
                            className="text-area edit-title"
                            type="text"
                            placeholder="Title"
                            value={formData.title}
                        />
                        <div className="row">
                            <div>
                                <label className="body radio-label" htmlFor="public-button">
                                    <input
                                        onChange={createHandler('ad_type_id')}
                                        className="radio"
                                        type="radio"
                                        id="public-button"
                                        name="role"
                                        checked={formData.ad_type_id === '1'}
                                        value={1}
                                    />
                                    {'      '}
                                    Public
                                </label>
                            </div>
                            <div>
                                <label className="body radio-label" htmlFor="local-button">
                                    <input
                                        onChange={createHandler('ad_type_id')}
                                        className="radio"
                                        type="radio"
                                        id="local-button"
                                        name="role"
                                        checked={formData.ad_type_id === '2'}
                                        value={2}
                                    />
                                    {'      '}
                                    Local
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="row edit-zone">
                        <img className="adv-avatar edit-avatar" src="./img/avatar.png" alt="Avatar pic" />
                        <textarea
                            onChange={createHandler('content')}
                            className="text-area edit-area"
                            type="text"
                            placeholder="Enter"
                            value={formData.content}
                        />
                    </div>
                    <div className="row space-between edit-bottom">
                        <Ripples onClick={handleClipperClick}>
                            <input className="hide" type="file" ref={imgInput} onChange={handleLoadImg} />
                            <i className="fa fa-paperclip icon attach" />
                        </Ripples>
                        {formLoading ? <LoaderWrapper vertical={false} /> : (
                            <div className="row edit-buttons">
                                <button onClick={handleCancel} className="secondary-button edit-button" type="submit">Cancel</button>
                                <button onClick={handlePost} className="primary-button edit-button" type="submit">Post</button>
                            </div>
                        )}
                    </div>
                    { img && !imgLoading ? <img className="attachment" src={img} alt="Attachment" /> : <div /> }
                    <div className="separator" />
                    { imgLoading ? <LoaderWrapper vertical={false} /> : <div />}
                </div>
            </div>
            <div className="separator" />
        </div>
    );
}

export default EditAd;
