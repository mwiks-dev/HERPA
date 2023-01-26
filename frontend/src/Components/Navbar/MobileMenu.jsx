import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {nav} from '../../assets/data/Data'

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative z-40">
        
      <button
        className="block text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {isMenuOpen && (
        <div className="absolute right-0 mt-2 px-4 py-2 w-48 bg-white rounded-md shadow-xl">
          <ul className='block pt-4 space-y-2'>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} className="block px-4 py-2 rounded-md text-gray-800 font-semibold hover:bg-herpaBlue">
                    {list.text}</Link>
                </li>
                 ))}
            </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
