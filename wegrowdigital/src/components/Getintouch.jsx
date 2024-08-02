import React from "react";
import image from "../assets/tanuj.jpg";

const Getintouch = () => {
  return (
    <section id="contact" className="py-16 font-maven bg-white">
      <div className="container mx-auto px-4">
        <p className="text-3xl font-bold text-center uppercase mb-8">
          Get in <span className="text-primary">Touch</span>
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-6xl">
            <div className="flex flex-col lg:flex-row justify-center space-y-8 lg:space-y-0 lg:space-x-8">
              <div className="flex flex-col items-center text-center bg-gray-100 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
                <img
                  src={image}
                  alt="Introduction Image"
                  className="w-full max-w-md rounded-lg h-auto mb-6"
                />
                <div className="flex gap-6">
                  <a
                    href="https://wa.me/919034375299"
                    className="text-2xl text-green-600 hover:text-green-800"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/wegrowdigital__/"
                    className="text-2xl text-pink-600 hover:text-pink-800"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/share/g/cNR3izQNfzp4iH31/?mibextid=JOZb8W"
                    className="text-2xl text-blue-600 hover:text-blue-800"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow-lg w-full lg:w-1/2">
                
                <div className="mb-8">
                  <p className="text-lg font-bold">India Address</p>
                  <p className="flex items-center mb-4">
                    <i className="fa fa-map-marker mr-2 text-2xl text-primary"></i>
                    <a
                      className="text-blue-700 mt-8 hover:underline"
                      href="https://www.google.com/maps/place/WeGrowDigital/@29.3947713,76.972513,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x390d187818894cb7:0x47e9e43f4a14fc10!2z8J2QkvCdkITwnZCOIPCdkJPwnZCe8J2QnPCdkKEg8J2QhPCdkLHwnZCp8J2QnvCdkKvwnZCt8J2QrCDwnZCP8J2Qr_CdkK0g8J2Qi_CdkK3wnZCdIC0gR3VyZ2FvbiwgSW5kaWEgfCBEaWdpdGFsIE1hcmtldGluZyBBZ2VuY3kgfCBXZWIgRGVzaWduLCBTRU8sIFBQQyBDb21wYW55!8m2!3d28.419408!4d77.0379589!16s%2Fg%2F11c6v5kx7y!3m5!1s0x390ddbf06d1fc1c1:0x6b48b7d8abbeb18d!8m2!3d29.3947713!4d76.9750879!16s%2Fg%2F11qfpfclyj?entry=ttu"
                      rel="nofollow"
                      target="_blank"
                      title="WeGrowDigital Location"
                    >
                      Paramhans Kutiya, 121/2, Amar Bhawan Chowk Area, Panipat,
                      Haryana 132103
                    </a>
                  </p>
                  <div className="mb-5 border-b-2 border-primary"></div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3476.1635504256174!2d76.97251297542132!3d29.394771275257124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbf06d1fc1c1%3A0x6b48b7d8abbeb18d!2sWeGrowDigital!5e0!3m2!1sen!2sin!4v1722406998243!5m2!1sen!2sin"
                    className="border-0 w-full mt-8 h-64"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="WeGrowDigital Location"
                  ></iframe>
                  
                  <div className="mt-9 flex flex-col items-center gap-4  text-gray-800">
                    <p className="text-xl font-bold">Contact us at:</p>
                    <p className="text-xl font-semibold">+91-90343-75299</p>
                    <p className="text-xl font-semibold" >+91-99962-75299</p>
                  </div>
                  <div className=" border-b-2 mt-8 border-primary"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Getintouch;
