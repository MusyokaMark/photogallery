import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-white text-lg font-semibold">Logo</span>
          </div>

          {/* Navbar Links */}
          <div className=" text-black font-bold hidden md:flex space-x-4 ">
            <Link to="/" className="nav-link hover:text-white">Home</Link>
            <div className="border-l border-gray-700 h-6"></div>
            <Link to="/gallery" className="nav-link hover:text-white">Gallery</Link>
            <div className="border-l border-gray-700 h-6"></div>
            <div className="relative inline-block text-left">
              <button onClick={() => setShowMenu(!showMenu)} className="nav-link">Categories</button>
              {showMenu && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-md shadow-lg py-1">
                  <Link to="/nature" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Nature</Link>
                  <Link to="/portrait" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Portrait</Link>
                  <Link to="/architecture" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Architecture</Link>
                </div>
              )}
            </div>
            <div className="border-l border-gray-700 h-6"></div>
            <Link to="/upload" className="nav-link flex gap-2"><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
              />
            </svg>Upload</Link>
            <div className="border-l border-gray-700 h-6"></div>
            <Link to="/about" className="nav-link">About</Link>
            <div className="border-l border-gray-700 h-6"></div>
            <Link to="/contact" className="nav-link">Contact</Link>
            
          </div>
          <Link to="/loginpage" className="nav-link"><Button className='rounded-md'>LOGIN</Button></Link>
         
          
          {/* Mobile Menu Button */}
          <div className="-mr-2 md:hidden">
            <button onClick={() => setShowMenu(!showMenu)} className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {showMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block font-bold px-3 py-2 text-black hover:bg-gray-700 hover:text-white rounded-md">Home</Link>
            <Link to="/gallery" className="block font-bold px-3 py-2 text-black hover:bg-gray-700 hover:text-white rounded-md">Gallery</Link>
            <Link to="/upload" className="block font-bold px-3 py-2 text-black hover:bg-gray-700 hover:text-white rounded-md">Upload</Link>
            <Link to="/about" className="block font-bold px-3 py-2 text-black hover:bg-gray-700 hover:text-white rounded-md">About</Link>
            <Link to="/contact" className="block font-bold px-3 py-2 text-black hover:bg-gray-700 hover:text-white rounded-md">Contact</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
