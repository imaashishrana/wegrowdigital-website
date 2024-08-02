import React, { useState, useEffect } from 'react';
// Import Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png'; // Ensure you have the correct path to your logo
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa'; // Font Awesome icons
import { Link, animateScroll as scroll } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <header className="relative w-full z-50 bg-gradient-to-r font-maven shadow-md">
      <nav className="container font-maven mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img className="w-24 md:w-32" src={logo} alt="WeGrowDigital Logo" />
          <span className=" text-2xl md:text-3xl font-bold text-purple-900">WeGrowDigital</span>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg md:text-xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer rounded-lg py-2 px-4 text-white hover:bg-purple-200 hover:text-gray-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faHome} className="h-6 w-6 text-purple-900" />
            <span className="hidden lg:inline text-purple-900">Home</span>
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer rounded-lg py-2 px-4 text-white hover:bg-purple-200 hover:text-gray-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faUser} className="h-6 w-6 text-purple-900" />
            <span className="hidden lg:inline text-purple-900">About Us</span>
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer rounded-lg py-2 px-4 text-white hover:bg-purple-200 hover:text-gray-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faBriefcase} className="h-6 w-6 text-purple-900" />
            <span className="hidden lg:inline text-purple-900">Services</span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 cursor-pointer rounded-lg py-2 px-4 text-white hover:bg-purple-200 hover:text-gray-800 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-6 w-6 text-purple-900" />
            <span className="hidden lg:inline text-purple-900">Contact Us</span>
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            className={`text-2xl focus:outline-none transition-colors duration-300 mr-4 ${
              isMenuOpen ? 'text-purple-900' : 'text-purple-800 hover:text-yellow-900'
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-1/2 md:w-1/2 font-bold bg-white shadow-lg md:hidden transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out rounded-lg`}
      >
        <div className="flex justify-end p-3">
          <button
            className="text-purple-800 hover:text-purple-900 text-2xl mr-4"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center text-purple-600 text-lg md:text-xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="py-4 w-full text-center rounded-lg text-purple-800 hover:text-purple-600 transition-colors duration-300 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="py-4 w-full text-center rounded-lg text-purple-800 hover:text-purple-600  transition-colors duration-300 border-b border-gray-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="py-4 w-full text-center rounded-lg text-purple-800 hover:text-purple-600  transition-colors duration-300 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="py-4 w-full text-center rounded-lg text-purple-800 hover:text-purple-200 transition-colors duration-300 border-b border-gray-300"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
        </div>
      </div>
      {/* Fixed Contact Icons */}
      <div className="fixed bottom-8 right-4 z-50 flex flex-col space-y-2">
        <a
          href="tel:+919034375299"
          title="Call Us"
          aria-label="Call Us"
          className="flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-lg transition-colors text-3xl"
        >
          <i className="fas fa-phone"></i>
        </a>
        <a
          href="https://wa.me/919034375299"
          target="_blank"
          title="WhatsApp Chat"
          aria-label="WhatsApp Chat"
          className="flex items-center justify-center bg-green-800 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-lg transition-colors text-3xl"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      {/* Fixed Scroll to Top Icon */}
      {isVisible && (
        <div
          className="flex items-center text-white justify-center cursor-pointer fixed bg-purple-400 hover:bg-purple-500 bottom-8 left-4 z-50 rounded-full w-16 h-16 space-y-2"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </header>
  );
};

export default Header;
