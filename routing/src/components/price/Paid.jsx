import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

function Paid() {
    const location = useLocation();
    return (
        <div>
        Paid Price
        <Link to={location.pathname + '/tier1'}>----Tier1----</Link>
        <Link to={location.pathname + '/tier2'}>----Tier2----</Link>
        <Outlet />
        </div>
    );
}

export default Paid;