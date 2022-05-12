import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/app');
    }, []);

    return (
        <div>
            <h1>Hello React</h1>
        </div>
    );
}

export default App;
