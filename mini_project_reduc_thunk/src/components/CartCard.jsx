import { DeleteOutlined, MinusCircleOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'
import { useDispatch } from 'react-redux';
import { addInCart, delInCart, removeFromCart } from '../redux/slice/cartSlice';
const randomImageIndex = Math.floor(Math.random() * 3);
function CartCard(props) {
    const dispatch = useDispatch();
    return (
        <div className='flex  gap-x-10  rounded-2xl '>
            <img
                alt={props.product.title}
                src={(props.product.images)[randomImageIndex]}
                className='w-52 rounded-l-2xl h-48 '
            />
            
            <div className="content my-5 flex flex-col rounded-2xl gap-y-2 px-3 mr-4 ">
                <h1 className="font-bold font-sans text-base text-slate-500">{props.product.title}</h1>
                <p className="w-64 text-sm text-slate-400">{props.product.description}</p>
            </div>
            <div className="price w-40 my-5 flex flex-col rounded-2xl gap-y-2 text-right px-3 mr-4 ">
                <p className="flex justify-around text-slate-500"><span>Price</span><span>:</span><span>${props.product.price}</span></p>
                <p className="flex justify-around text-slate-500"><span>Quantity</span><span>:</span><span>{props.product.quantity}</span></p>
                <hr className='border border-slate-600 my-2 border-solid' />
                <p className="flex justify-around text-slate-700"><span>Total</span><span>:</span><span>${props.product.price * props.product.quantity}</span></p>
            </div>
            <div className="price pr-5 my-5 flex flex-col items-center gap-y-10">
                <PlusCircleOutlined onClick={() => {
                    dispatch(addInCart(props.product));
                }} className='w-fit text-slate-700 hover:text-slate-800 '/>
                <MinusCircleOutlined onClick={() => { dispatch(delInCart(props.product.id)) }} className='w-fit text-slate-700 hover:text-slate-800 '/>
                <DeleteOutlined onClick={()=>{dispatch(removeFromCart(props.product.id))}} className='w-fit text-slate-700 hover:text-slate-800 '/>
            </div>
        </div>
    );
}

export default CartCard