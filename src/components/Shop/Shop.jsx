import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './product/product';
import Cart from './Cart/Cart';

const Shop = () => {

    const products = useLoaderData();
    console.log(products);

    const [cart,setCart] = useState ([]);

    const handleAddToCart = (selectedProduct) => {
        let newCart =[];

        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){

            selectedProduct.quantity= 1;
            newCart = [...cart,selectedProduct]
            
        } 
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }

        setCart(newCart)
    }

    const clearAddToCart = () => {
        setCart ([])
    }
     

  
    return (
        <div className='py-16 flex'>

            <div className='w-4/5 p-16'>
               
            <div className='grid grid-cols-3 gap-7'>
            {
                products.map(product => <Product
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    product={product}

                ></Product>)
               }
            </div> 
            </div>

            <div className='bg-[#FF99004D] w-1/5 fixed p-4 rounded right-0 top-32'>
                <Cart
                  cart={cart}
                  clearAddToCart ={clearAddToCart }
                ></Cart>
            
                


            </div>
            


        </div>
    );
};

export default Shop;