import React from 'react';
import { Link } from 'react-router-dom';

function Service() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
        <div className="bg-purple-500 bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-lg mb-6">We offer a wide range of services to help your business grow</p>
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Consulting Services</h3>
              <p className="text-gray-600">Our experts will guide you through the best strategies for your business growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">We design and develop high-quality websites tailored to your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">Boost your online presence with our targeted marketing solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Service Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">We provide tailored solutions for your business challenges, ensuring the best outcomes.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-600">Our team is always available to provide support and answer any questions you may have.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Service;
