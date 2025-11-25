import React from 'react';
import './Welcome.css';

function Welcome({name}) {
    return(
        <div className='welcome'>
            <h2>{name}</h2>
        </div>
    );
};

export default Welcome;