import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-js-loader';
import '../../public/sass/index.scss';

function LoaderWrapper({ vertical }) {
    return (
        <div className={`${vertical ? 'root' : ''} column center loader`}>
            <Loader type="box-rectangular" bgColor="#4D47C3" />
        </div>
    );
}

LoaderWrapper.propTypes = {
    vertical: PropTypes.bool,
};

LoaderWrapper.defaultProps = {
    vertical: true,
};

export default LoaderWrapper;
