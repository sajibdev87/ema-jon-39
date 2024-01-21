import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';



const product = ({product, handleAddToCart}) => {

  
  // console.log(cart.length);
 

  
    const {name, seller, category, img, ratings, price} = product;
    return (
        <div className="card w-86 bg-base-100 shadow-xl">
  <figure><img src={img} alt={name} /></figure>
  <div className="card-body">
    <h2 className="font-semibold">{name}</h2>
    <p>Seller : {seller} <br/> Category : {category} <br/> Rating : {ratings} <br/> <span className='font-bold'>price : ${price}</span></p>
    <div className="card-actions justify-end">
      <button  onClick={() => handleAddToCart(product)} className="btn bg-[#FF99004D] w-full mt-4 font-semibold mb-4">Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
    </div>
  </div>
</div>
    );
};

export default product; 