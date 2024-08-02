import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailData = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
      to_email: 'marketing@wegrowdigital.in'
    };

    emailjs.send('service_krqz1yr', 'template_q6lfqol', emailData, 'ZWsdp2raZfHne9HWZ')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent Successfully');
      }, (error) => {
          console.log(error.text);
          alert('Message Sending Failed');
      });

    setFormData({ name: "", email: "", mobile: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div id="ContactForm" className="w-full max-w-2xl p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="mobile">
              Mobile
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="mobile"
              type="tel"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out transform hover:scale-105"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
