import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from '../button/button';
import { FaDonate} from "react-icons/fa";
import { Link } from 'react-router-dom';
import {nav} from '../../assets/data/Data'
import { logo } from '../../assets/data/Data';
// import herpalogo from '../../assets/images/herpalogo.jpg'
import MobileMenu from './MobileMenu';

const MainNavbar = () => {
    
  return (
    <nav className=" w-100% shadow-lg">
     <div className="flex justify-between items-center herpol-container">
       <div className="flex items-center">
       <Link to={`/`} className="flex items-center">
                <img src={logo.mainLogo} alt="" className='w-120 h-16 '  />
       </Link>
      </div>
      <div className='hidden md:flex items-center text-gray-700 mr-6'>
            <ul className='flex pt-4 space-x-2'>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path} className="px-3 py-2 rounded-md uppercase text-gray-800 font-bold hover:bg-herpaLightDarkRed">
                    {list.text}</Link>
                </li>
                 ))}
            </ul>
          </div>
          <div className="hidden md:flex items-center space-x-2 pt-4">
        <a href="#" className="px-3 py-2 rounded-full bg-herpaBlueLight hover:bg-herpaBlue">
          <FaFacebook />
        </a>
        <a href="#" className="px-3 py-2 rounded-full bg-herpaBlueLight hover:bg-herpaBlue">
          <FaTwitter />
        </a>
        <a href="#" className="px-3 py-2 rounded-full bg-herpaBlueLight hover:bg-herpaBlue">
          <FaLinkedin />
        </a>
        <a href="#" className="px-3 py-2 rounded-full bg-herpaBlueLight hover:bg-herpaBlue">
          <FaInstagram />
        </a>
      </div>
      <div className="md:hidden">
        <Button>
            <FaDonate /> Donate
        </Button>
      </div>
      <div>
          {/* Mobile Hamburger */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
     </div>
    </nav>
  );
};

export default MainNavbar;
