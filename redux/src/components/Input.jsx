import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { resetMessage, setMessage } from '../redux/slices/messageSlice';
import {Button} from 'antd';
function Input() {
    const inputRef = useRef(null);
    const dispatch = useDispatch();               // dispatch or updation occurs using the hook useDispatch
    function handleSubmit(e) {
        e.preventDefault();
        const inputText = inputRef.current.value;
        dispatch(setMessage(inputText));                // we update the state message using the reducer setMessage that accepts an action 
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder='Data' ref={inputRef} />
                <button type='submit'>Update</button>
            </form>
            <Button onClick={()=>{
                return dispatch(resetMessage());
            }}>Reset</Button>
        </>
    );
}

export default Input;