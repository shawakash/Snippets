import React from 'react';
import { useSelector } from 'react-redux';

function Display() {
    const message = useSelector((state)=> state.messageReducer.message);

    //  HERE useSelector subscribes or loads the whole store as state 
    //  and then we go inside store|sate select one of its reducer (messageReducer) 
    //  and then the value present in it

    return (
        <div>{message}</div>
    )
}

export default Display;