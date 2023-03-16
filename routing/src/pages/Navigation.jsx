import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    
    return (
        <nav className='p-3'>
            <ul className='flex justify-around'>
                <li className="outline outline-4">
                    <Link to='/home'>Home</Link>
                </li>
                <li className="outline outline-4">
                    <Link to='/about' state={{value: 'Btc', tokenNumber: 2}}>About</Link>  {/*<Link state={object to pass} /> to accepts as location.state wher location = useLocation() */}
                </li>
                <li className="outline outline-4">
                    <Link to='/login'>Login</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navigation;