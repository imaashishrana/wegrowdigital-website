import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faHospital, faStethoscope, faCar, faHotel, faPlane, faDollarSign, faStar } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <section id="about" >
      <div className=" font-maven  text-center py-12 px-4 md:px-10">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
          <span className="font-extrabold">About Us</span>
        </h2>
        <p className="text-base md:text-lg leading-relaxed tex-black-200">
          WeGrowDigital is the #1{' '}
          <a href="https://www.seotechexperts.com/" className="text-black-600 hover:underline">
            Digital Marketing Agency in Panipat
          </a>
          , which provides high-end digital marketing solutions to its Indian and overseas clients. The company has a very effective way of providing its digital services. The biggest USP of the company is its highly experienced and qualified team, who are also great listeners and pour valuable research while working on Website Promotion. The experts possess great innovative, responsive, and analytical skills to develop that one big plan offering results-based performance marketing solutions. Stay Tuned to get professional{' '}
          <a href="/digital-marketing.html" className="text-black-600 hover:underline">
            From one of the Best Digital Marketing agency in Panipat, Haryana
          </a>{' '}
          - India.
        </p>
      </div>

      {/* Building Section */}
      <div className="building font-maven bg-white py-12 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
          <div className="relative w-full lg:w-1/3">
            {/* First Image */}
            <img
              src="https://cdn.seotechexperts.com/images/seo-experts-360.webp"
              alt="360 Result Driven Digital Performance Marketing Agency"
              className="w-full h-auto"
            />
            {/* Second Image */}
            <img
              src={logo}
              alt="360 Result Driven Digital Performance Marketing Agency"
              className="absolute inset-0 m-auto w-1/2 h-auto"
            />
          </div>
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Service categories with icons */}
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faTv} className="text-6xl text-blue-600 mb-4" /> {/* Media & Entertainment */}
                <p className="text-xl font-semibold">
                  <a href="/media-entertainment.html" className="text-blue-600 hover:underline">Media & Entertainment</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faHospital} className="text-6xl text-green-600 mb-4" /> {/* Hospitals */}
                <p className="text-xl font-semibold">
                  <a href="/hospitals.html" className="text-blue-600 hover:underline">Hospitals</a>
                </p>
              </div>
             
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faStethoscope} className="text-6xl text-red-600 mb-4" /> {/* Healthcare */}
                <p className="text-xl font-semibold">
                  <a href="/healthcare.html" className="text-blue-600 hover:underline">Healthcare</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faStar} className="text-6xl text-purple-600 mb-4" /> {/* Astrologers */}
                <p className="text-xl font-semibold">
                  <a href="/astrologers.html" className="text-blue-600 hover:underline">Astrologers</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faCar} className="text-6xl text-blue-700 mb-4" /> {/* Automobiles */}
                <p className="text-xl font-semibold">
                  <a href="/automobiles.html" className="text-blue-600 hover:underline">Automobiles</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faHotel} className="text-6xl text-orange-600 mb-4" /> {/* Hotels & Resorts */}
                <p className="text-xl font-semibold">
                  <a href="/hotels-resorts.html" className="text-blue-600 hover:underline">Hotels & Resorts</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faPlane} className="text-6xl text-cyan-600 mb-4" /> {/* Travel & Tourism */}
                <p className="text-xl font-semibold">
                  <a href="/travel-tourism.html" className="text-blue-600 hover:underline">Travel & Tourism</a>
                </p>
              </div>
              <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
                <FontAwesomeIcon icon={faDollarSign} className="text-6xl text-green-600 mb-4" /> {/* Financial Firms & Stock Market */}
                <p className="text-xl font-semibold">
                  <a href="/financial-firms.html" className="text-blue-600 hover:underline">Financial Firms & Stock Market</a>
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center bg-gray-100 p-16 rounded-lg shadow-md">
                 {/* Real Estate Firms */}
                <p className="text-xl text-center font-semibold">
                  <a href="/real-estate.html" className="text-blue-600 hover:underline">And Many More...</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
