import { Button, Checkbox, Form, Input } from 'antd';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const inputRef = useRef(null);
    const navigate = useNavigate();  // Programitically Navigation
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     // any logical code
    //     navigate(`/user/${inputRef.current.value}`)
    // }
    return (
        <div>
            <form onSubmit={()=> navigate(`/user/${inputRef.current.value}`)}> {/*calling user/:userId when form is submitted using useNavigate*/} 
                <input type="text" ref={inputRef} className='border-2 border-teal-500 mx-5 rounded-full px-3 py-1' />
                <button type="submit" className='border-2 border-slate-500 p-2 rounded-full'>Button</button>
            </form>
        </div>
    );
}

export default Login;