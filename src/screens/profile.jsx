import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Ripples from 'react-ripples';
import EditUser from '../components/editUser';
import BootrstrapContext from '../context/bootstrap';
import TokenContext from '../context/token';

function Profile() {
    const { bootstrap, loadBootstrap } = useContext(BootrstrapContext);
    const { changeToken } = useContext(TokenContext);
    const navigate = useNavigate();

    const handleConfirm = () => loadBootstrap();

    const handleLogout = () => {
        changeToken(null);
        navigate('/login');
    };

    return (
        <div>
            {Object.keys(bootstrap).length !== 0
            && (
                <div>
                    <div className="column center">
                        <div className="profile-container">
                            <div className="row space-between profile-header">
                                <div className="row center">
                                    <img className="adv-avatar" src="./img/avatar.png" alt="avatar img" />
                                    <h4 id="usr-title" className="title4">{`${bootstrap.firstname} ${bootstrap.lastname}`}</h4>
                                </div>
                                <Ripples onClick={handleLogout} className="item log-out">
                                    <i className="fa fa-sign-out icon" />
                                </Ripples>
                            </div>
                            <EditUser data={bootstrap} onConfirm={handleConfirm} />
                        </div>
                    </div>
                    <div className="separator" />
                </div>
            )}
        </div>
    );
}

export default Profile;
