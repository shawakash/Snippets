import { EditOutlined, EllipsisOutlined, MinusCircleOutlined, PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider } from 'antd';
import Meta from 'antd/es/card/Meta';
import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addInCart, delInCart } from '../redux/slice/cartSlice';
const randomImageIndex = Math.floor(Math.random() * 3);
function ProductCard(props) {
    const dispatch = useDispatch();
    return (
        <Card
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt={props.product.title}
                    src={(props.product.images)[randomImageIndex]}
                />
            }
            actions={[
                <div className='font-bold py-1'> $ {props.product.price}</div>,
                <PlusCircleOutlined onClick={()=> {
                        dispatch(addInCart(props.product));
                }} />,
                <MinusCircleOutlined onClick={() => {dispatch(delInCart(props.product.id))}} />,
            ]}
        >
            <Meta
                avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
                title={props.product.title}
                description={<div>
                    <div className="">{props.product.description}</div>
                </div>}
            />
        </Card>
    );
}

export default ProductCard