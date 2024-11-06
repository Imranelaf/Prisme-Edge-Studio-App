import React from 'react';

function Newsletter() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        
      
        <div className="md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get the latest updates, news, and exclusive offers directly to your inbox.</p>

          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-4 py-2 rounded-md transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

      
        <div className="md:w-1/2 pl-0 ml-9 md:pl-8 text-gray-700">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
          <p className="mb-2">Info@mysite.com</p>
          <p className="mb-6">Tel: 123-456-7890</p>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Social</h3>
          <ul className="mb-6">
            <li className="mb-1">Discord</li>
            <li className="mb-1">Twitch</li>
            <li className="mb-1">Facebook</li>
            <li className="mb-1">YouTube</li>
            <li className="mb-1">Twitter</li>
            <li className="mb-1">LinkedIn</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
          <p>500 Terry Francine St</p>
          <p>San Francisco, CA 94158</p>
        </div>

      </div>
    </div>
  );
}

export default Newsletter;
