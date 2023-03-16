import React, { useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Price() {
    const location = useLocation();
    const parentLocation = location.pathname;
    
    console.log(location);
    return (
        <div>
        Price ke Tarike
        <nav>
            <Link to={parentLocation + '/free'}>----Free----</Link>
            {}
            <Link to={parentLocation + '/paid'}>----Paid----</Link>
        </nav>
        <Outlet />
        </div>
    );
}

export default Price;