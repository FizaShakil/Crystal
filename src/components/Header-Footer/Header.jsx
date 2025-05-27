import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Reusable/Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-gray-200 px-4 py-4 bg-[#151515] sticky top-0 z-50 shadow-md pb-5">

      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <button
            className="text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-lg md:hidden`}></i>
          </button>
          <Logo/>
        </div>

        {/* DESKTOP Header Icons */}
        <div className="hidden md:flex items-center gap-6 text-sm mr-10">
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/"
                  className={({ isActive }) => `hover:text-orange-600 duration-300 ${isActive ? "text-orange-600" : "text-white"}`}>
                  Home
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/about"
                  className={({ isActive }) => `hover:text-orange-600 duration-300 ${isActive ? "text-orange-600" : "text-white"}`}>
                   About
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/products"
                  className={({ isActive }) => `hover:text-orange-600 duration-300  ${isActive ? "text-orange-600" : "text-white"}`}>
                   Products
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/pricing"
                  className={({ isActive }) => `hover:text-orange-600 duration-300  ${isActive ? "text-orange-600" : "text-white"}`}>
                   Pricing
             </NavLink>
            </span>
          </div>
          <div className="flex flex-col justify-end items-center gap-2">
            <span>
              <NavLink to="/terms-of-service"
                  className={({ isActive }) => `hover:text-orange-600 duration-300  ${isActive ? "text-orange-600" : "text-white"}`}>
                   Terms of Service
             </NavLink>
            </span>
          </div>
        </div>
      </div>

      {/* MOBILE + SIDEPANEL MENU */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#151515] border-r-gray-700 border-r-[0.1px] z-50 p-5 overflow-y-auto transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        }`}
      >

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">
            <span className="text-white">C</span>rystal
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <i className="fas fa-times text-white text-lg"></i>
          </button>
        </div>

        {/* MOBILE VIEW (all header icons) */}

        {/* SHARED VIEW: Menu Items */}
        <div className="space-y-2 text-sm">
          <ul className="space-y-2">
            <li> 
              <i className="fa-solid fa-house text-gray-400 text-base -mb-3 mr-2"></i>
                <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <i className="fa-solid fa-user text-gray-400 text-base -mb-3 mr-2"></i>
                <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <i className="fa-solid fa-briefcase text-gray-400 text-base -mb-3 mr-2"></i>
                <NavLink to={'/products'}>Products</NavLink>
            </li>
            <li>
               <i className="fa-solid fa-address-card text-gray-400 text-base -mb-3 mr-2"></i>
                 <NavLink to={'/pricing'}>Pricing</NavLink>
            </li>
            <li>
               <i className="fa-solid fa-book text-gray-400 text-base -mb-3 mr-2"></i>
                 <NavLink to={'/terms-of-service'}>Terms of Service</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
