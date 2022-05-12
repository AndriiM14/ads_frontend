import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import RootNav from '../navigation/root';
import 'react-toastify/dist/ReactToastify.css';
import TokenContext from '../context/token';

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'));

    // eslint-disable-next-line no-shadow
    const changeToken = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    return (
        <div>
            <TokenContext.Provider value={{ token, changeToken }}>
                <RootNav />
                <ToastContainer theme="dark" />
            </TokenContext.Provider>
        </div>
    );
}

export default App;
