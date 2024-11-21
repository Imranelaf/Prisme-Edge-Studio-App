import React from 'react';
import { FetchingFounders } from '@/components/pages/FetchingFrounders';
import Newsletter from '@/components/common/NewsLetters';

function About() {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <div className="h-screen mt-16 ml-24 w-3/4">
        <h2 className="font-bold text-lg">We Are Prisme Edge Studio</h2>
        <h1 className="font-bold text-5xl text-gray-700 mt-7">
          We're creating the best in interactive entertainment by making games that change the way people have fun.
        </h1>
      </div>

      {/* About Section */}
      <div className="about-section h-screen flex">
        {/* Image Section */}
        <img
          src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1080&auto=format&fit=crop"
          alt="Gaming"
          className="w-1/2 h-full "
        />
        <div className="para w-1/2 flex flex-col justify-center px-24 bg-green-900 text-gray-200">
          <p className="my-8 text-lg leading-relaxed">
            I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p className="my-8 text-lg leading-relaxed">
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
      </div>

      <div className="founders-background h-screen flex justify-center items-center">
        <div className="founders h-4/5 w-4/5 bg-blue-900 flex flex-col justify-center">
          <FetchingFounders />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default About;