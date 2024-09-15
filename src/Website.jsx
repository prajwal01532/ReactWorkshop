import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service.jsx";
import Contact from './components/Contact.jsx';

import NavBar from './NavBar.jsx';
import DynamicPage from './components/DynamicPage.jsx';
import ProductPage from './components/ProductPage.jsx';
import ProductDetails from './components/ProductDetails.jsx';
function Website(){
    return(
        <Router>
            <NavBar/>
            
        <div>
 
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dynamic/:id" element={<DynamicPage/>}/>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Service />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path='/products/:id' element={<ProductDetails/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    )
}
export default Website