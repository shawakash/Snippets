import React from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FaOpencart } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Navigation() {
    const navigate = useNavigate();
    let numberOfProducts = 0;
    const cartProducts = useSelector(state => state.cartReducer.cart);
    cartProducts.forEach((cartItem) => {
        numberOfProducts += cartItem.quantity;
    });
    console.log('Product/s in Cart : ', numberOfProducts);
    return (
        <>
            <nav className="shadow-md bg-slate-100 sticky top-0 z-10 bg-opacity-90">
                <ul className="flex text-slate-600 font-mono justify-between mx-[210px] py-5 text-3xl">
                    <li className="font-bold">Brand</li>
                    <li className="">
                        <div className="flex items-center gap-3">
                            <FaOpencart onClick={() => {
                                navigate('/cart');
                            }}/>
                            <div className="">
                                {numberOfProducts}
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Navigation;