
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {faDeleteLeft} from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart,clearAddToCart }) => {
    

  let quantity = 0;
  let total = 0;
  let shipping = 0;
 for(const product of cart){
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    
   
 }
 const tax = ((total * 0.1).toFixed(2));
 const grandTotal =total + tax + shipping;
   
    return (
        <div>
            
            <h4 className='text-2xl text-center m-4'>Order Summary</h4>
                <div className='ms-4 pe-4'>
                    <p className='m-3 text-[##0E161A]'>Selected Items: {quantity}</p>
                    <p className='m-3 text-[##0E161A]'>Total Price: ${total}</p>
                    <p className='m-3 text-[##0E161A]'>Total Shipping Charge: ${shipping}</p>
                    <p className='m-3 text-[##0E161A]'>Tax: ${tax}</p>
                    <p className='m-3 text-black font-semibold '>Grand Total: ${grandTotal}</p> 
                    <button onClick={clearAddToCart} className='btn btn-sm bg-red-500 border-0 text-white mt-3 w-full hover:bg-[#00f9ff] hover:text-[#005262] '>Clear Cart <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
</button>
                    <br/>
                    <button className='btn btn-sm bg-orange-500 border-0 text-white mt-3 w-full  hover:bg-[#44FF32] hover:text-orange-700 mb-4'>Review Order <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ms-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>
</button>
                </div>
                
        </div>
    );
};

export default Cart;