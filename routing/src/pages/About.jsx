import React from 'react';
import { useLocation } from 'react-router-dom';

function About() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <div>About  {(location.state == null) ? ' ' : (location.state.value + ' ' + location.state.tokenNumber)} </div>
        </>
    );
}

export default About;