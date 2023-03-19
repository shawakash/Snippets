import { Alert, Button, Input } from 'antd';
import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartCard from '../components/CartCard';
import ProductCard from '../components/ProductCard';

function CartList() {
    const isChecked = true;
    const promoRef = useRef(null);
    let cart = useSelector(state => state.cartReducer.cart);
    cart = cart.filter((cartItem) => cartItem.quantity != 0);
    let numberOfProducts = 0;
    let subTotal = 0;
    cart.forEach((cartItem) => {
        numberOfProducts += cartItem.quantity;
        subTotal += cartItem.quantity * cartItem.price;
    });
    console.log(cart);
    return (
        <div className='Product my-10 flex justify-center p-5 items-start gap-x-10'>
            <ul className="flex flex-col flex-wrap gap-24 justify-center items-center">
                {cart.map((product) => {
                    return (
                        <li id={product.id} key={product.id} className='shadow-md hover:shadow-2xl transition-all rounded-2xl'  >
                            <CartCard
                                product={product}
                            />
                        </li>
                    )
                })
                }
            </ul>
            <div className="shadow-md hover:shadow-2xl w-fit h-fit p-5 rounded-2xl gap-2 bg-slate-50 transition-all items-center flex flex-col">
                <div className="Calc flex gap-8 text-lg h-fit text-slate-600 font-serif tracking-wide p-5 rounded-2xl  transition-all">
                    <div className="flex flex-col w-fit h-fit text-right gap-y-2">
                        <span className="">Total Items</span><span className="">SubTotal</span><span className="">Tax</span><span className="">Total</span>
                    </div>
                    <div className="flex flex-col w-fit h-fit text-right gap-y-2">
                        <span className="">:</span><span className="">:</span><span className="">:</span><span className="">:</span>
                    </div>
                    <div className="flex flex-col w-fit h-fit text-right gap-y-2">
                        <span className="">{numberOfProducts}</span><span className="">$ {subTotal}</span><span className="">$ {(0.18 * subTotal).toFixed(3)}</span><span className="">$ {(subTotal * 1.18).toFixed(3)}</span>
                    </div>
                </div>
                <Link to='/' state={{}}><button className='text-lg bg-teal-500 py-1 px-3 text-slate-100 font-semibold rounded-full hover:font-bold'>Check Out</button></Link>
                <div className="promo text-sm flex flex-col gap-y-2 m-4  text-slate-500">
                    <p className="">Have a Promo Code ?</p>
                    <Input className='h-6 text-slate-700 tracking-wide' ref={promoRef} addonAfter={<Link onClick={() => {
                        isChecked = true
                    }}>Check</Link>} />
                </div>
            </div>


        </div>

    );
}

export default CartList;