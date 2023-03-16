import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedForPrime() {
    const isLoggedIn = false;   // to be implemented by some code
    return (
        <>
            {isLoggedIn? <Outlet /> : <Navigate to='./login' />}
        </>
    );
}

export default ProtectedForPrime;