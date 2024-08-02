import React from 'react';

const Services = () => {
  return (
    <section id="about" className="min-h-screen flex font-maven flex-col items-center justify-center bg-white-500 py-12">
    <div className="text-center py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-Black ">
      Services Offering By <span className="font-extrabold">WeGrowDigital</span>
      </h2>
      <p className="text-base md:text-lg leading-relaxed  text-black-500">
        WeGrowDigital is the #1 digital marketing agency offering a comprehensive range of services. Our team excels in creating tailored strategies to boost your online presence and achieve your business goals. Explore our services below:
      </p>
    </div>

    {/* Services Section */}
    <div className="bg-white py-12 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Social Media Management */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fab fa-facebook text-6xl text-blue-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Social Media Management</h3>
          <ul className="list-disc list-inside text-left">
            <li>Posts creation</li>
            <li>Content creation</li>
            <li>2+ Social Media Accounts Managed</li>
            <li>Hashtags research</li>
            <li>Group sharing</li>
            <li>Instagram reach + followers</li>
            <li>Facebook reach + likes + followers + organic reviews</li>
            <li>Google organic reviews</li>
          </ul>
        </div>

        {/* Ad Campaign Management */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-bullhorn text-6xl text-red-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Ad Campaign Management</h3>
          <ul className="list-disc list-inside text-left">
            <li>Leads generation</li>
            <li>Brand awareness traffic</li>
            <li>Sales campaign</li>
            <li>Search campaign</li>
            <li>And many more</li>
          </ul>
        </div>

        {/* Google My Business & Ads */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fab fa-google text-6xl text-blue-500 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Google My Business & Ads</h3>
          <ul className="list-disc list-inside text-left">
            <li>New listing creation</li>
            <li>Page optimization</li>
            <li>Update listing</li>
            <li>Phone number updating</li>
            <li>Google ranking</li>
            <li>Skipable ads</li>
            <li>Display ads</li>
            <li>Native ads</li>
            <li>Non-skippable ads</li>
          </ul>
        </div>

        {/* Search Engine Optimization */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-search text-6xl text-green-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Search Engine Optimization</h3>
          <ul className="list-disc list-inside text-left">
            <li>On-page SEO</li>
            <li>Off-page SEO</li>
            <li>Blogs SEO</li>
            <li>Local SEO</li>
            <li>Technical SEO</li>
          </ul>
        </div>

        {/* Websites */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-laptop text-6xl text-gray-700 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Websites</h3>
          <ul className="list-disc list-inside text-left">
            <li>Static website</li>
            <li>Dynamic website</li>
            <li>One page website or landing page</li>
            <li>Informative website</li>
            <li>E-commerce website</li>
            <li>Domain and hosting registration</li>
            <li>Content creation</li>
          </ul>
        </div>

        {/* Graphic Design & Video Editing */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-paint-brush text-6xl text-pink-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Graphic Design & Video Editing</h3>
          <ul className="list-disc list-inside text-left">
            <li>Animation videos (2D, 3D, Cartoon)</li>
            <li>Promotional Videos</li>
            <li>Wedding Invitation Videos</li>
            <li>Birthday Invitation Videos</li>
            <li>Product videos</li>
          </ul>
        </div>

        {/* PR & ORM Management */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-newspaper text-6xl text-orange-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">PR & ORM Management</h3>
          <ul className="list-disc list-inside text-left">
            <li>Digital PR</li>
            <li>Digital Branding</li>
            <li>Newspaper publishing</li>
            <li>YouTube management.</li>
            <li>Instagram management</li>
            <li>Facebook management</li>
          </ul>
        </div>

        {/* App Promotion & Bulk Marketing */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-mobile-alt text-6xl text-teal-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">App Promotion & Bulk Marketing</h3>
          <ul className="list-disc list-inside text-left">
            <li>Installs</li>
            <li>Signups and Registration</li>
            <li>App Promotional Videos</li>
            <li>App Reviews</li>
          </ul>
        </div>

        {/* Influencer Marketing */}
        <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md">
          <i className="fas fa-user-friends text-6xl text-purple-600 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2">Influencer Marketing</h3>
          <ul className="list-disc list-inside text-left">
            <li>Macro influencers</li>
            <li>Micro influencers</li>
            <li>Reels creation</li>
            <li>Reels promotion</li>
            <li>Meme marketing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);
};

export default Services;
