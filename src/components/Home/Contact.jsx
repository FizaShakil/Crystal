import React from 'react'
import Heading, { SubLine } from '../Reusable/Heading'

const Contact = () => {
  return (
    <section className="bg-[#1f1f1f] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
      <Heading head={"Contact Us"}/>
        <SubLine line={"Have a question or just want to say hi? We'd love to hear from you. Reach out to us using the contact information below."}/>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-9">
          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-envelope text-4xl mb-4 text-orange-600"></i>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-300">Feel free to drop by our office during business hours.</p>
            <p className="mt-2 font-medium">info@companyname.com</p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-phone-alt text-4xl mb-4 text-orange-600"></i>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-300">Connect with us on social media for the latest updates and news.</p>
            <p className="mt-2 font-medium">+1 (123) 456-7890</p>
          </div>

          {/* Office */}
          <div className="flex flex-col items-center text-center">
            <i className="fas fa-map-marker-alt text-4xl mb-4 text-orange-600"></i>
            <h3 className="text-xl font-semibold mb-2">Office</h3>
            <p className="text-gray-300">We aim to respond to all messages within 24 hours.</p>
            <p className="mt-2 font-medium">123 Main Street, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
