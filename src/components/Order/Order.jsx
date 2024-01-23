import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from './ReviewItem';


const Order = () => {
    const {initialCart, products} = useLoaderData()
    const  [cart, setCart] = useState(initialCart || [])
    console.log(initialCart);
    return (
        <div className='py-16 w-1/2 mx-auto'>
            <h1>Order</h1>
            {
                cart.map(product => (
                    <ReviewItem 
                    product={product}
                    key={product.id}
                    />
                ))
            }
        </div>
    );
};

export default Order;