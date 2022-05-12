import React from 'react';
import { ToastContainer } from 'react-toastify';
import RootNav from '../navigation/root';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div>
            <RootNav />
            <ToastContainer theme="dark" />
        </div>
    );
}

export default App;
