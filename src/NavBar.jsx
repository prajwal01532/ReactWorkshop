import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
      
    return(
      // {/* padding all sides is denoted by (p-4) and padding right denoted by(pr-4) 
      //     ,padding left denoted by (pl-4),bottom (pb-4) and for top padding ko lagi(pt-4)*/}
      <nav className="bg-pink-300 shadow-lg fixed right-0 left-0">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-800">
            MyWebsite
          </div>
          <ul className="flex space-x-6 text-white-600">
          <Link to='/'> <li><a href="#" className="text-blue-500 rounded hover:bg-green-100">Home</a></li></Link>
          <Link to="/about"><li><a href="#" className="text-blue-500 rounded hover:bg-green-100">About</a></li></Link>  
          <Link to='/services'><li><a href="#" className="text-blue-500 rounded hover:bg-green-100">Services</a></li></Link> 
          <Link to='/contact'><li><a href="#" className="text-blue-500 rounded hover:bg-green-100">Contact</a></li></Link> 
          <Link to='/products'><li><a href="#" className="text-blue-500 rounded hover:bg-green-100">Products</a></li></Link> 
      
          </ul>
        </div>
      </nav>
    )
    }
    export default NavBar