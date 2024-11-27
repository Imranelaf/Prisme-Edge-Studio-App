import React from 'react';

function Footer() {
  return (
    <>
      {/* Divider */}
      <div className="w-full h-[1.5px] bg-gray-300 my-6"></div>

      {/* Footer Content */}
      <div className="w-full bg-gray-100 py-8">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Contact</h3>
              <p className="text-gray-600 mb-2">Info@mysite.com</p>
              <p className="text-gray-600">Tel: 123-456-7890</p>
            </div>

            {/* Social Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    Twitch
                  </a>
                </li>
              </ul>
            </div>

            {/* Address Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600">500 Terry Francine St</p>
              <p className="text-gray-600">San Francisco, CA 94158</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-200 py-4">
        <p className="text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} MySite. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
