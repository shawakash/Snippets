import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/slice/productSlice';
import ProductCard from '../components/ProductCard';

function ProductList() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, []);

    const products = useSelector(state => state.productReducer.products);
    const productStatus = useSelector(state => state.productReducer.status);
    const error = useSelector(state => state.productReducer.error);
    const antIcon = (
        <LoadingOutlined
            style={{
                fontSize: 90,
            }}
            spin
        />
    );
    if (productStatus == 'loading') {
        return <div className="flex flex-col justify-center my-52"><Spin indicator={antIcon} /></div>
    }if(productStatus == 'failed') {
        return <div className="flex flex-col justify-center my-52 mx-96">{error}</div>
    }
    return (
        <div className='Product my-10 flex justify-center p-5'>
            <ul className="flex flex-wrap gap-24 justify-center items-center">
                {products?.map((product) => {
                    return (
                        <li id={product.id} key={product.id} className='shadow-md hover:shadow-2xl transition-all '  >
                            <ProductCard
                                product={product}
                            />
                        </li>
                    )
                })
                }
            </ul>
        </div>
    );
}

export default ProductList;