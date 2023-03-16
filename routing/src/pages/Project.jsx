import React from 'react'
import { useParams } from 'react-router-dom';

function Project() {
    const prams = useParams()
    console.log(prams)
    return (
        <div>Project of {prams.userId} with project Id of {prams.projectId}</div>
    );
}

export default Project;