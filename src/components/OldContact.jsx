import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
        <div className="bg-yellow-500 bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-6">We would love to hear from you. Get in touch with us!</p>
            <a href="#contact-form" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Get In Touch
            </a>
          </div>
        </div>
      </header>

      {/* Contact Information Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Email Us</h3>
              <p className="text-gray-600">info@mywebsite.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Call Us</h3>
              <p className="text-gray-600">+1 123 456 7890</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
              <p className="text-gray-600">123 Business St., City, Country</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Send Us a Message</h2>
          <form className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Name</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                id="message"
                rows="4"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
