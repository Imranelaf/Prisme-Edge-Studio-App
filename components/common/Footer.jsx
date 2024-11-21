import React from 'react'

function Footer() {
  return (
    <div className=" w-full text-gray-700 mt-4 flex flex-row justify-around">
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact</h3>
          <p className="mb-2">Info@mysite.com</p>
          <p className="mb-6">Tel: 123-456-7890</p>
          </div>

            <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Social</h3>
          <div className='flex flex-row space-x-3 '>
          <ul className="mb-6">
            <li className="mb-1">Discord</li>
            <li className="mb-1">Twitter</li>
            <li className="mb-1">Twitch</li>
            </ul>
            </div>
          </div>
          <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
          <p>500 Terry Francine St</p>
          <p>San Francisco, CA 94158</p>
          </div>
        </div>
  )
}

export default Footer