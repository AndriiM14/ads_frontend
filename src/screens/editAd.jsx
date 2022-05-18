import React from 'react';

function EditAd() {
    return (
        <div>
            <div className="row start edit-root">
                <div className="advs-prev">
                    <div className="row center advs-prev-container">
                        <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                        <div className="advs-prev-content">
                            <div className="row space-between">
                                <h5 className="title5">Ad's title</h5>
                                <p className="info">20.04.2022 12:00</p>
                            </div>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis exercitationem...</p>
                        </div>
                    </div>
                    <div className="row center advs-prev-container">
                        <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                        <div className="advs-prev-content">
                            <div className="row space-between">
                                <h5 className="title5">Ad's title</h5>
                                <p className="info">20.04.2022 12:00</p>
                            </div>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis exercitationem...</p>
                        </div>
                    </div>
                    <div className="row center advs-prev-container">
                        <img className="adv-avatar adv-prev-avatar" src="./img/avatar.png" alt="Avatar pic" />
                        <div className="advs-prev-content">
                            <div className="row space-between">
                                <h5 className="title5">Ad's title</h5>
                                <p className="info">20.04.2022 12:00</p>
                            </div>
                            <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis exercitationem...</p>
                        </div>
                    </div>
                </div>
                <div className="edit-container">
                    <textarea className="text-area edit-title" type="text" placeholder="Title">Ad's title</textarea>
                    <div className="row edit-zone">
                        <img className="adv-avatar edit-avatar" src="./img/avatar.png" alt="Avatar pic" />
                        <textarea className="text-area edit-area" type="text" placeholder="Enter" />
                    </div>
                    <div className="row space-between edit-bottom">
                        <i className="fa fa-paperclip icon attach" />
                        <div className="row edit-buttons">
                            <button className="secondary-button edit-button" type="submit">Cancel</button>
                            <button className="primary-button edit-button" type="submit">Post</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator" />
        </div>
    );
}

export default EditAd;
