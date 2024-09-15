import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      

      {/* Hero Section */}
      <header className="bg-cover bg-center h-96" style={{ backgroundImage: 'url("https://source.unsplash.com/random")' }}>
        <div className="bg-indigo-500 bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white px-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">Learn more about our journey, mission, and team</p>
            <a href="#" className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iure animi magnam, voluptas distinctio cumque quasi voluptatum provident molestiae deserunt corrupti dolores repellat amet beatae molestias tempora numquam porro temporibus.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">To provide exceptional solutions to help businesses grow and thrive in an ever-changing world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">We believe in transparency, innovation, and putting our clients first in everything we do.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://source.unsplash.com/random/200x200" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://source.unsplash.com/random/200x200" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="https://source.unsplash.com/random/200x200" alt="Team Member" className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
