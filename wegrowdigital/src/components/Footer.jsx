import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import 'remixicon/fonts/remixicon.css'; // Import Remix Icon styles

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-purple-100 text-lg md:text-xl shadow-lg font-maven py-16 px-8 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-start gap-4">
        <img className="w-24 md:w-32" src={logo} alt="WeGrowDigital Logo" />
          <p className="  rounded-lg  text-purple-900 text-xl">
            A Digital Marketing Agency :)
          </p>
          
        </div>
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-purple-900 text-3xl">WeGrowDigital</h2>
          <ul className="text-purple-900">
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-purple-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-purple-900"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                smooth={true} 
                duration={500} 
                className="cursor-pointer hover:text-purple-900"
              >
                Service
              </Link>
            </li>
          </ul>
          <div className="flex flex-row gap-4">
          <a 
              href="https://wa.me/919034375299" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-600 hover:text-purple-900"
            >
              <i className="ri-whatsapp-fill text-3xl"></i>
            </a>
            
            <a 
              href="https://www.instagram.com/wegrowdigital__/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-pink-600 hover:text-purple-900"
            >
              <i className="ri-instagram-fill text-3xl"></i>
            </a>
            <a 
              href="https://www.facebook.com/share/g/cNR3izQNfzp4iH31/?mibextid=JOZb8W" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-purple-900"
            >
              <i className="ri-facebook-circle-fill text-3xl"></i>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-purple-900 text-3xl">Contact Us</h2>
          <ul className="text-purple-900">
            <li>
              <a 
                href="tel:+919034375299" 
                className="cursor-pointer hover:text-purple-900"
              >
                +91-90343-75299
              </a>
            </li>
            <li>
              <a 
                href="mailto:marketing@wegrowdigital.in" 
                className="cursor-pointer hover:text-purple-900"
              >
                marketing@wegrowdigital.in
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-600" />
      <p className="text-center text-purple-900">
        Copyright 2024 ©️ WeGrowDigital.com - All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
