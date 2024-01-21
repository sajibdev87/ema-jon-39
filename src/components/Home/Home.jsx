import React from 'react';
import hero from '../../assets/images/Hero image.png'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container mx-auto py-28">
           <div className="flex justify-between items-center">
             
             <div>
             <p className="py-6 text-[#FF9900]">Sale up to 70% off</p> 

               <h1 className="text-5xl font-bold">New Collection For Fall</h1>

               <p className="py-6">Discover all the new arrivals of ready-to-wear collection.</p>

               <Link to='/shop' className="btn bg-[#FF9900]">SHOP NOW</Link>
             </div> 

               <div className='img-box'>
                  <img src={hero} className="rounded-lg shadow-2xl" />
               </div>
               
           </div>
        </div> 
    );
};

export default Home;