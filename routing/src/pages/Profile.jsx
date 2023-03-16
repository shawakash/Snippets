import React from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const prams = useParams();
    console.log(prams)
    return (
        <div>Profile of {prams.userId}</div>
    );
}

export default Profile;