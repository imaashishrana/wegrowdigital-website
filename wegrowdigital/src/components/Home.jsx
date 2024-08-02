import React from 'react';
import '../styles/tailwind.css'; // Ensure you import your Tailwind CSS file
import brand1 from '../assets/1.jpg';
import brand2 from '../assets/2.jpg';
import brand3 from '../assets/3.jpg';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="font-maven relative overflow-hidden">
        <div className="hero-video">
          <div className="video-container">
            <video
              src="https://cdn.seotechexperts.com/video/seo-hero-video.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full object-cover"
            ></video>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
              <p className="text-4xl text-center font-bold">Give Wings To</p>
              <p className="text-6xl text-center font-bold">Your Business</p>
              <div className="typeJsWrapper mt-4">
                <div className="container">
                  <p
                    className="typeJsText"
                    title="Organic SEO Results, On Page Audit, Web Page Speed, Core Web Vitals Improvement, Video Marketing, Target Audience Marketing"
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 font-maven bg-gray-100">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 shadow rounded">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-lg font-semibold">Years of Industry Experience</div>
              <div className="text-base"></div>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-lg font-semibold">Satisfied clients</div>
              <div className="text-base"></div>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-lg font-semibold">Brands</div>
              <div className="text-base"></div>
            </div>
            <div className="bg-white p-6 shadow rounded">
              <div className="text-3xl font-bold">100+</div>
              <div className="text-lg font-semibold">Collaborated With Marketing Agencies</div>
              <div className="text-base"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Section */}
      <div className="bg-brand font-maven py-12">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/3 text-center">
            <p className="text-lg font-bold">Brands trusted us</p>
          </div>
          <div className="w-full md:w-2/3">
            <div className="marquee-wrapper overflow-hidden relative">
              <div className="marquee flex space-x-4 animate-marquee">
                {/* Update these image sources with new brand images */}
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-2.webp"
                  alt="Brand 2"
                  className="w-48 h-auto"
                />
                <img
                  src={brand1}
                  alt="Brand 2"
                  className="w-48 h-20"
                />
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-3.webp"
                  alt="Brand 3"
                  className="w-48 h-auto"
                />
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-4.webp"
                  alt="Brand 4"
                  className="w-48 h-auto"
                />
                <img
                  src={brand2}
                  alt="Brand 2"
                  className="w-48 h-20"
                />
                <img
                  src={brand3}
                  alt="Brand 2"
                  className="w-48 h-20"
                />
                
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-5.webp"
                  alt="Brand 5"
                  className="w-48 h-auto"
                />
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-2.webp"
                  alt="Brand 2"
                  className="w-48 h-auto"
                />
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-3.webp"
                  alt="Brand 3"
                  className="w-48 h-auto"
                />
                <img
                  src="https://cdn.seotechexperts.com/images/brand/brand-4.webp"
                  alt="Brand 4"
                  className="w-48 h-auto"
                />
                {/* Add more brands as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal Section */}
      <div className="popup-modal font-maven py-12 bg-gray-200">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Award 1 */}
      <div className="bg-white p-6 shadow-lg rounded flex items-center justify-center flex-col">
        <i className="fas fa-trophy text-yellow-500 text-3xl mb-4"></i>
        <p className="text-lg font-semibold text-gray-800 text-center">Best ORM services provider in ASIA</p>
      </div>
      {/* Award 2 */}
      <div className="bg-white p-6 shadow-lg rounded flex items-center justify-center flex-col">
        <i className="fas fa-star text-blue-500 text-3xl mb-4"></i>
        <p className="text-lg font-semibold text-gray-800 text-center">Best Digital Marketing Agency 2024</p>
      </div>
      {/* Award 3 */}
      <div className="bg-white p-6 shadow-lg rounded flex items-center justify-center flex-col">
        <i className="fas fa-medal text-green-500 text-3xl mb-4"></i>
        <p className="text-lg font-semibold text-gray-800 text-center">Best social media management company</p>
      </div>
      {/* Award 4 */}
      <div className="bg-white p-6 shadow-lg rounded flex items-center justify-center flex-col">
        <i className="fas fa-certificate text-red-500 text-3xl mb-4"></i>
        <p className="text-lg font-semibold text-gray-800 text-center">Website making Agency of the Year</p>
      </div>
      {/* Add more awards as needed */}
    </div>
  </div>
</div>










      {/* Welcome Section */}
      
    </div>
  );
};

export default Home;
