import Link from 'next/link';
import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      {/* Subtitle */}
      <p className="text-teal-800 font-semibold uppercase tracking-wide text-sm sm:text-base">
        About Prisme Edge Studio
      </p>

      {/* Title */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-4 mb-6 leading-snug">
        Your Source for <br /> Video Games Entertainment
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
        I&apos;m a paragraph. Click here to add your own text and edit me. It&apos;s easy. Just double-click me
        to add your own content and make changes to the font. I&apos;m a great place for you to tell a story and let your
        users know a little more about you.
      </p>

      {/* Button */}
      <Link href='/about' className="bg-teal-800 text-white px-6 py-3 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-200 text-sm sm:text-base md:text-lg">
        Learn more
      </Link>
    </div>
  );
}

export default About;
