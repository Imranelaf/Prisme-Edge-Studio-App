import React from 'react';
import { FetchingFounders } from '@/components/pages/FetchingFrounders';
import Newsletter from '@/components/common/NewsLetters';
import Image from 'next/image';

function About() {
  return (
    <div className="about-container w-full">
      {/* Introduction Section */}
      <div className="min-h-screen px-4 md:px-8 lg:px-24 lg:mt-16 md:mt-8 sm:mt-4 w-full lg:w-3/4 flex flex-col justify-center">
        <h2 className="font-bold text-lg">We Are Prisme Edge Studio</h2>
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-700 mt-4 md:mt-7">
          We&apos;re creating the best in interactive entertainment by making games that change the way people have fun.
        </h1>
      </div>

      {/* About Section */}
      <div className="about-section min-h-screen flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-auto relative">
          <Image
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=1080&auto=format&fit=crop"
            alt="Gaming"
            layout="fill"
            objectFit="fill"
            priority 
          />
        </div>
        <div className="para w-full lg:w-1/2 lg:h-auto flex flex-col justify-center p-6 md:p-12 lg:px-12 bg-green-900 text-gray-200">
          <p className="my-4 text-base lg:text-lg leading-relaxed">
            I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I&apos;m a great place for you to tell a story and let your users know a little more about you.
          </p>
          <p className="my-[15px] text-base lg:text-lg leading-relaxed">
            This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
          </p>
        </div>
      </div>

      <div className="founders-background min-h-screen flex justify-center items-center p-4 md:p-8">
        <div className="founders h-4/5 w-full lg:w-4/5 bg-blue-900 flex flex-col justify-center p-4 md:p-8">
          <FetchingFounders />
        </div>
      </div>
      <Newsletter />
    </div>
  );
}

export default About;
