import React from 'react';
import Loader from 'react-js-loader';
import '../../public/sass/index.scss';

function LoaderWrapper() {
    return (
        <div className="root column center">
            <Loader type="box-rectangular" bgColor="#4D47C3" />
        </div>
    );
}

export default LoaderWrapper;
