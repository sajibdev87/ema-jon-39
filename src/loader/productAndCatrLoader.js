import React from 'react';
import { getStoredCart } from '../Utilities/fakedb';



/* data lode kora */
export const productAndCatrLoader = async () => {

    const productData = await fetch('products.json');
    const products = await productData.json();
   

   const savedCart = getStoredCart ();

   



   const initialCart = [];
   for(const id in savedCart){
    const addedproduct = products.find(product => product.id === id)
     if(addedproduct){
        const quantity = savedCart[id]
        addedproduct.quantity = quantity;
        initialCart.push(addedproduct)
     }
   }

    return {products: products, initialCart: initialCart }
    
};

 